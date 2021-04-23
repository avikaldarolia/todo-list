import React from "react";

const ToDoList = (props) => {
  return (
    <div>
      <button onClick={() => props.onSelect(props.id)}> - </button>
      <li>{props.val}</li>
    </div>
  );
};

export default ToDoList;
