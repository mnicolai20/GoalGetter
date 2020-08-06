import React from "react";
import "./style.css";

const styling = {
    border: "solid",
    borderWidth: "5px",
    borderColor: "black"
}

function GoalsList({ goals }) {

    const updatedList = goals.map((goal,i) => {
        return <li key= {i}><a href={`/joingoal/${goal._id}`}>{goal.title}</a></li>;
    });
    
    

    return (
        <ul className="list" style={styling}>{updatedList}</ul>
    );
}
export default GoalsList;


