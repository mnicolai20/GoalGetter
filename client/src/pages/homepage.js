import React from "react";
import Hero from "../components/Hero";
import { Container, Row, Col } from "react-bootstrap";

function CreateGs() {
    return (
        <div>
            <Hero backgroundImage="./images/createGs1.jpg"></Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1>Welcome to</h1>
                        <img src="../images/logo5.png"></img>
                    </Col>
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
