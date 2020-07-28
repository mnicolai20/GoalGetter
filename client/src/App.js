import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewGoals from "./pages/newgoal";
import SignUp from "./pages/signup";
import LogIn from "./pages/login";
import UpdateGoal from "./pages/updategoal"
import Homepage from "./pages/homepage"
;

function App() {
  return (
    <Router>
      <div>

        <Route exact path="/" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/newgoals" component={NewGoals} />
        <Route exact path="/updategoal" component={UpdateGoal} />
        <Route exact path="/homepage" component={Homepage} />

      </div>
    </Router>
  );
}

export default App;