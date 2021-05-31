// hocs
import withInitialize from "hocs/withInitialize";
import withStyle from "hocs/withStyle";
// redux
import { rootStore } from "stores";
import { Provider } from "react-redux";
// components
import Navigator from "./Navigator";

const App = (props) => {
  // wrapped hocs
  const hocs = [withInitialize, withStyle];
  const ComponentWithHOCs = hocs.reduce(
    (WrappedComponent: React.FC, withHOC) => {
      return withHOC(WrappedComponent);
    },
    Navigator
  );

  return (
    <Provider store={rootStore}>
      <ComponentWithHOCs {...props} />
    </Provider>
  );
};

export default App;
