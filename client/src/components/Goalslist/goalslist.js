import React, { Component } from "react";


function GoalsList({ goals }) {

    const updatedList = goals.map((goal,i) => {
        return <li key= {i}>{goal.title}</li>;
    });

    return (
        <ul>{updatedList}</ul>
    );
}
export default GoalsList;


