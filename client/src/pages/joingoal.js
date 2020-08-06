import React, { Component } from "react";
import axios from "axios";

class JoinGoal extends Component{
    constructor() {
        super();
        this.state = { 
            title: "",
            category: "",
            description: "",
            createdBy: "",
            username: "",
            userId: "",
            userGoals: [],
            redirectTo: null
        };
    }
    //joinGoal(){
//this.setState

  //  }

    // componentWillMount(){
    //     this.getLoginStatus()
    //   }
    
    //   getLoginStatus(){
    //     axios.get("/auth/user_data")
    //     .then(data => {
    //       if(data.username){
    //         return this.setState({isLoggedIn: true})
    //       }
    //     }).catch(err => {
    //       console.log(err);
    //     })
    //   }

    componentDidMount(){
        this.fetchUser()
        this.fetchGoal(this.props.match.params.id);    
    }

    fetchGoal = async goalId => {
        let {data} = await axios.get("/api/goals/" + goalId);
        this.setState({
            title: data.title,
            category: data.category,
            description: data.description,
            // createdBy: ""
        })
    }

    fetchUser = async () => {
        let {data} = await axios.get("/auth/user_data")
        console.log(data);
        
        this.setState({
            username: data.username || "",
            userId: data.id || "",
            userGoals: data.goals || []
        })
       // this.fetchGoal(data);
    }

    userHasGoal = () => {
        return (this.state.userGoals.includes(this.state.goalId))
    }

    render() {
        return (
            <form>
                <div className="form-group titleDiv">
                 <h1 className="heading">Goal </h1>
                    <h2>{this.state.title}</h2>
                </div>
                <div className="catDiv">
                    <h3>{this.state.category}</h3>
                </div>
                <div className="descripDiv">
                    <p>{this.state.description}</p>
                </div>
                { this.userHasGoal() ?
                <button className="abandon">Abdandon Goal!</button>: 
                <button className="join">Join Goal!</button>
                }
            </form>
        )
    }
}

export default JoinGoal;