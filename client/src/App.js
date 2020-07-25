import React from "react";
import { BrowserRouter as Router, Route, Switch,  } from "react-router-dom";
// import NewGoals from "./pages/newgoal";
import SignUp from "./pages/signup";
import CreateGoals from "./pages/CreateGoals";

function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path={["/", "/newgoals", "signup"]}>
            <CreateGoals />
            {/* <NewGoals /> */}
            <SignUp />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;