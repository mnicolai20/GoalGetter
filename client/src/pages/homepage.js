import React from "react";
import Hero from "../components/Homepage";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div>
            <Hero backgroundImage="./images/createGs1.jpg"></Hero>
            <Container style={{ marginTop: 30 }}>
                {/* <div> */}
                <Row>
                    <Col size="md-12">
                        {/* <h1>Welcome to</h1> */}
                        <img src="../images/logo5.png" alt="Goal Getter Logo" className="logo"></img>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <Link to="/newgoals">
                        <Button variant="light" size="lg" block className='createBtn'>
                            Create New Goals
                    </Button>
                    </Link>
                    <Link to="/viewUpdateGoals">
                        <Button variant="dark" size="lg" block className='updateBtn'>
                            View/Update Goals
                    </Button>
                    </Link>
                    <Link to="/connect">
                        <Button variant="dark" size="lg" block className='connectBtn'>
                            Connect with Other Users
                    </Button>
                    </Link>
                </Col>
                </Row>
            {/* </div> */}
            {/* <Row>
                    <Col size="md-12">
                            <input type="text"></input>
                            <button>You got this!!!</button>
                    </Col>
                </Row> */}
            </Container>

        </div >

    )
}

export default Homepage;
