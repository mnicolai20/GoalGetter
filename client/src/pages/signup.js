import React, { Component } from "react";
import { Form } from 'react-bootstrap';
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
            // console.log(response)
            if(!response.data.errmsg){
                // console.log("successful signup")
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
        <h4>Sign up</h4>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </div>
    )
}
}