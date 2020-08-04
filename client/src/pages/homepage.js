import React, { useState, useEffect } from "react";
import Hero from "../components/Homepage";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoalsList from "../components/Goalslist/goalslist";

function Homepage() {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        // make the fetch here
        fetch('/api/goals')
            .then(res => {
                return res.json()
            })
            .then(newGoalsValue => {
                setGoals(newGoalsValue)
            })

            .catch(function(err) {

                console.log(err)
            })

        // set the goals state 

    }, []);

    return (
        <div>
            {
                goals.map(goal => {
                    return (
                        <div key={goal._id}>
                            <p>{goal.title}</p>
                       </div>
                    )
                })
            }
            <Hero backgroundImage="./images/createGs1.jpg"></Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col>
                        <Col size="md-12">
                            {/* <h1>Welcome to</h1> */}
                            <img src="../images/logo5.png" alt="Goal Getter Logo" className="logo"></img>
                        </Col>
                        <Link to="/newgoals">
                            <Button variant="light" size="lg" block className='createBtn'>
                                Create New Goals
                    </Button>
                        </Link>
                        <Button variant="dark" size="lg" block className='updateBtn'>
                            View/Update Goals
                    </Button>
                        <Button variant="dark" size="lg" block className='connectBtn'>
                            Connect with Othe   r Users
                    </Button>
                    </Col>
                </Row>
                <Row>
                    <GoalsList goals={goals} />
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
