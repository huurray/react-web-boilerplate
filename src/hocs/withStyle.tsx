import React from "react";
import GlobalStyle from "styles/base";

const withStyle = (WrappedComponent: React.FC) => (props: any) => {
  return (
    <>
      <GlobalStyle />
      <WrappedComponent {...props} />
    </>
  );
};

export default withStyle;
