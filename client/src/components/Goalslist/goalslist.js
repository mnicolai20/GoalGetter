import React, { Component } from "react";
import "./style.css";

const styling = {
    border: "solid",
    borderRadius: "5px",
    borderColor: "black"
}

function GoalsList({ goals }) {

    const updatedList = goals.map((goal,i) => {
        return <li key= {i}>{goal.title}</li>;
    });

    return (
        <ul className="list" style={styling}>{updatedList}</ul>
    );
}
export default GoalsList;


