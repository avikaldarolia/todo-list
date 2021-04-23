import React, { useState } from "react";

const ToDoForm = () => {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);
  //   const [items, updateItems] = useState([]);

  const itemEvent = (event) => {
    setInputItem(event.target.value);
  };

  const handleChange = () => {
    setItems((oldItems) => {
      return [...oldItems, inputItem];
    });
    setInputItem("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="What ToDo??"
        onChange={itemEvent}
        value={inputItem}
      />
      <button onClick={handleChange}> + </button>

      <ul>
        {items.map((item) => {
          <ToDoList />;
        })}
      </ul>
    </div>
  );
};

export default ToDoForm;
