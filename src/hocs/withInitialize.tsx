import React, { useEffect, useState } from "react";
// api
import useAuthAPI from "api/auth/useAuthAPI";

const withInitialize = (WrappedComponent: React.FC) => (props: any) => {
  const [initialized, setInitialized] = useState(false);

  const { getUserAPI } = useAuthAPI();

  async function init() {
    try {
      await getUserAPI();
    } catch (error) {
      console.error(error);
    } finally {
      setInitialized(true);
    }
  }

  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {initialized ? (
        <WrappedComponent {...props} />
      ) : (
        <div
          style={{
            display: "flex",
            flex: 1,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>loading animation...</span>
        </div>
      )}
    </>
  );
};

export default withInitialize;
