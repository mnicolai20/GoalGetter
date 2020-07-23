
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewGoals from "./pages/newgoal";
import SignUp from "./pages/signup";
;

function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path={["/", "/newgoals", "signup"]}>
            <NewGoals />
            <SignUp />
          </Route>
          
           
         
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;




