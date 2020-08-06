import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
// import { Redirect } from "react-router-dom";
import axios from "axios";

const pageStyle = {
    textAlign: "left",
    backgroundImage: "url(https://lh3.googleusercontent.com/proxy/FcnkcVgmIjhCHPILXlfm1Xn23KLicrfcmWl-unWh3erRurztapJT5KIeW9raePzx1anyVIroy4vp2j_ryx6nzh3ERLnDdQAxhjBm0kPgTwUieuzumX235uQ)",
    backgroundSize: "cover",
    height: "800px",
    margin: "0",
    backgroundRepeat: "no-repeat",
    position: "relative"
}

const formStyle = {
    backgroundColor: "rgba(52, 52, 52, 0.4)",
    backgroundOpaque: "50%",
    backgroundRadius: "10"
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
                <div className="signupForm" style={formStyle}>
                <h4 className="title">Sign up</h4>
                <Form className="signupSheet">
                    <Form.Group controlId="formBasicEmail" className="usernameLine">
                        <Form.Label>Create Username</Form.Label>
                        <Form.Control type="input"  name = "username" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="usernameLine">
                        <Form.Label>Password</Form.Label>
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