
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewGoals from "./pages/newgoal";
;

function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path={["/", "/newgoals"]}>
            <NewGoals />
          </Route>
          
           
         
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;




