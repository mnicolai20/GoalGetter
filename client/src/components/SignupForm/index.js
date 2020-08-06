import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
// import { Redirect } from "react-router-dom";
import axios from "axios";

const pageStyle = {
    textAlign: "left",
    backgroundImage: "url(https://squarmilner.com/wp-content/uploads/2017/08/Together-We-Can-Achieve-More.jpg)",
    backgroundSize: "fit",
    height: "650px",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black"
}

const textStyle = {
    color: "white"
}

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            confirmPassword: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        // const history = useHistory();
        
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit(event) {
        event.preventDefault();

        axios.post("/auth/signup", {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log("successful signup");
                    window.location="/homepage";
                    // <Redirect to="/homepage"/>
                    // this.props.history.push("/homepage");   
                    // this.getSnapshotBeforeUpdate({
                    //     // direct to login page
                    //     redirectTo: "/login"
                    // })
                    // this.getSnapshotBeforeUpdate({
                    //     // direct to homepage after successful login
                    //     redirectTo: "/homepage"
                    // })
                } else {
                    console.log("username already taken")
                }
            }).catch(error => {
                console.log("signup error")
                console.log(error);
            })
    }

    render() {
        return (
            <div className="page" style={pageStyle}>
                <div className="signupForm">
                <h4 className="title" style={textStyle}>Sign up</h4>
                <Form className="signupSheet">
                    <Form.Group controlId="formBasicEmail" className="usernameLine">
                        <Form.Label style={textStyle}>Create Username</Form.Label>
                        <Form.Control type="input"  name = "username" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="usernameLine">
                        <Form.Label style={textStyle}>Password</Form.Label>
                        {/* {console.log(this.state.password)} */}
                        <Form.Control type="password"  name = "password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
            </Button>
                </Form>
                </div>
            </div>
        )
    }
}

export default Signup;