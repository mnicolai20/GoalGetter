import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewGoals from "./pages/newgoal";
import SignUp from "./pages/signup";
import LogIn from "./pages/login";
;

function App() {
  return (
    <Router>
      <div>

        <Route exact path="/" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/newgoals" component={NewGoals} />

      </div>
    </Router>
  );
}

export default App;