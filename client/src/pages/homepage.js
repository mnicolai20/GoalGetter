import React from "react";
import Hero from "../components/Homepage";
import { Container, Row, Col, Button } from "react-bootstrap";

function Homepage() {
    return (
        <div>
            <Hero backgroundImage="./images/createGs1.jpg"></Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        {/* <h1>Welcome to</h1> */}
                        <img src="../images/logo5.png" alt="Goal Getter Logo" className="logo"></img>
                    </Col>
                    <Button variant="light" size="lg" block className='createBtn'>
                        Create New Goals                    
                    </Button>
                    <Button variant="dark" size="lg" block className='updateBtn'>
                        View/Update Goals
                    </Button>
                    <Button variant="dark" size="lg" block className='connectBtn'>
                        Connect with Other Users
                    </Button>
                </Row>
                <Row>
                    {/* <Col size="md-12">
                            <input type="text"></input>
                            <button>You got this!!!</button>
                    </Col> */}
                </Row>
            </Container>

        </div>

    )
}

export default Homepage;
