import React, { Component } from "react";


function GoalsList({ goals }) {

    const updatedList = goals.map((goal) => {
        return <li>{goal}</li>;
    });

    return (
        <ul>{updatedList}</ul>
    );
}
export default GoalsList;


