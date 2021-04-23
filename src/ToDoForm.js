import React, { useState } from "react";
import ToDoList from "./ToDoList";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";

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
  const deleteItem = (id) => {
    // console.log("CLicked", id);

    // const newItems = items.map((item, index) => {
    //   return index !== id && item;
    // });
    // setItems(newItems);
    setItems((oldItems) => {
      return oldItems.filter((item, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="mainContainer">
      <Input
        type="text"
        defaultValue="What ToDo??"
        onChange={itemEvent}
        value={inputItem}
        multiline={true}
        
      />
      <span mr-5> </span>
      <Button onClick={handleChange} variant="contained" color="secondary">
        {" "}
        +{" "}
      </Button>

      <ul>
        {items.map((item, index) => {
          return (
            <ToDoList id={index} key={index} val={item} onSelect={deleteItem} />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoForm;
