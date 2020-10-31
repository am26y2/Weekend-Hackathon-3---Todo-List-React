import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [listItem, setListItem] = useState([]);
  const [input, setinput] = useState("");

  const ToDoList = (props) => {
    const { item, onDelete, id } = props;
    if (!item || !item.trim()) return null;
    return (
      <>
        <div className="row">
          <li>{item}</li>
          <button onClick={() => onDelete(id)}>
            <span>❌</span>
          </button>
        </div>
      </>
    );
  };
  const handleDelete = (id) => {
    const filtervalue = listItem.filter((item, index) => index !== id);
    setListItem(filtervalue);
    console.log(id);
  };
  const handleChange = (event) => {
    setinput(event.target.value);
    console.log("clicked");
  };

  const additem = () => {
    const addItem = [...listItem, input];
    setListItem(addItem);
    setinput("");
  };
  return (
    <div id="main">
      <div>
        <input
          id="task"
          type="input"
          placeholder="AddItem"
          value={input}
          onChange={handleChange}
        />
        <button id="btn" onClick={additem}>
          <span>➕</span>
        </button>
      </div>
      <br />
      <div className="list">
        <ol>
          {listItem.map((itemval, index) => {
            return (
              <ToDoList
                item={itemval}
                key={index}
                id={index}
                onDelete={handleDelete}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
