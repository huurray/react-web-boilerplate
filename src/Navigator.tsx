import { BrowserRouter, Switch, Route } from "react-router-dom";
// pages
import Main from "pages/Main";
import FoF from "pages/FoF";

function Navigator() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route>
          <FoF />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Navigator;
