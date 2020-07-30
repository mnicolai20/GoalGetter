import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "./style.css";

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        axios.post("/auth/login", {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    this.setState({
                        redirectTo: "/"
                    })
                }
            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="page">
                    <h4 className="title">Log In</h4>
                    <Form>
                        <Form.Group controlId="formBasicEmail" className="usernameLine">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="input" name= "username" placeholder="Enter username" value={this.state.username} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="usernameLine">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="input"  name= "password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                           <hr></hr>
                            <Button variant="primary" type="submit" onClick={this.handleSubmit} className="submit sub1">
                                Submit
                    </Button>
                            <Button variant="danger" type="submit" href="/signup" className="submit sub2">
                                Sign Up!
                    </Button>
                        </Form.Group>

                    </Form>
                </div>
            )
        }
    }
}

export default LoginForm;