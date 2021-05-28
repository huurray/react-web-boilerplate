import React, { useEffect } from "react";
// api
import useAuthAPI from "api/auth/useAuthAPI";

const withInitialize = (WrappedComponent: React.FC) => (props: any) => {
  const { getUserAPI } = useAuthAPI();

  async function init() {
    await getUserAPI();
  }

  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <WrappedComponent {...props} />
    </>
  );
};

export default withInitialize;
