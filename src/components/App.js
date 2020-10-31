import React, { useState } from "react";
import "./../styles/App.css";
function App() {
  const [listItem, setListItem] = useState([]);
  const [input, setinput] = useState("");

  const ToDoList = (props) => {
    const { item, onDelete, id, onEdit } = props;
    if (!item || !item.trim()) return null;
    return (
      <>
        <div className="list">
          <li>{item}</li>
          <button onClick={() => onDelete(id)}>
            <span>❌</span>
          </button>
          <button onClick={() => onEdit(id)}>
            <span>✍️</span>
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

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleChange = (event) => {
    setinput(event.target.value);
  };

  const additem = () => {
    const addItem = [...listItem, input];
    setListItem(addItem);
    setinput("");
  };
  return (
    <div id="main">
      <h1>ToDoList</h1>
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
                onEdit={handleEdit}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
