import { Route, Switch } from "react-router-dom";

import Landing from "./Pages/Landing";
import Naigavtion from "./Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Naigavtion />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
