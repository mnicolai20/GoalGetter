import React, { Component } from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from "axios";

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
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit(event) {
        event.preventDefault();

        axios.post("/user/", {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response)
            if(!response.data.errmsg){
                console.log("successful signup")
                this.getSnapshotBeforeUpdate({
                    // direct to login page
                    redirectTo: "/login"
                })
            } else{
                console.log("username already taken")
            }
        }).catch(error => {
            console.log("signup error")
            console.log(error);
        })
    }


render() {
    return(
    <div className="page">
        <h4 className="title">Sign up</h4>
        <Form className="signupSheet">
            <Form.Group controlId="formBasicEmail" className="usernameLine">
                <Form.Label>Create Username</Form.Label>
                <Form.Control type="input" placeholder="Enter username"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="usernameLine">
                <Form.Label>Password</Form.Label>
                <Form.Control type="input" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                Submit
            </Button>
        </Form>
    </div>
    )
}
}

export default Signup;