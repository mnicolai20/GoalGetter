import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewGoals from "./pages/newgoal";
import SignUp from "./pages/signup";
import LogIn from "./pages/login";
import UpdateGoal from "./pages/updategoal";
import Homepage from "./pages/homepage";
import Joingoal from "./pages/joingoal";
import axios from "axios";


class App extends Component {
 constructor (){
   super ()
   this.state = {
     isLoggedin: null
   }
 }

  // componentWillMount(){
  //   this.getLoginStatus()
  // }

  // getLoginStatus(){
  //   axios.get("/auth/user_data")
  //   .then(data => {
  //     if(data.username){
  //       return this.setState({isLoggedIn: true})
  //     }
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }

  render(){
    return (
      <Router>
        <div>
  
          <Route exact path="/" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/newgoals" component={NewGoals} />
          <Route exact path="/updategoal" component={UpdateGoal} />
          <Route exact path="/homepage" component={Homepage} />
          <Route path="/joingoal/:id" component={Joingoal} /> 
  
        </div>
        {this.state.isLoggedIn ? <h5>Logged In</h5>: null} 
      </Router>
    );
  }
}

export default App;