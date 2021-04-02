import { Route, Switch } from "react-router-dom";

import "../styles/main.scss";
import Naigavtion from "./Navigation/Navigation";
import Landing from "./Pages/Landing";
import Auth from "./Pages/Auth";
import Account from "./Pages/Account";
import ListManage from "./Pages/ListManage";

function App() {
  return (
    <div className="App">
      <Naigavtion />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/auth" component={Auth} />
        <Route path="/account" component={Account} />
        <Route path="/list_manage" component={ListManage} />
      </Switch>
    </div>
  );
}

export default App;
