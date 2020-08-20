/* global location */
import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  const handleDelete = () => {
    fetch('/api/goals/' + props.goalId, {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(() => { window.location.reload() })
  }
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0" onClick={handleDelete}>
      ✗
    </span>

  );
}

export default DeleteBtn;
