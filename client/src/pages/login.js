import LoginForm from "../components/LoginForm";
import React, { Component } from "react";
// import Nav from "../components/Nav";

class Login extends Component{
    render() {
        return(
            <>
            {/* <Nav /> */}
            <LoginForm />
            </>
        )
    }
}

export default Login;