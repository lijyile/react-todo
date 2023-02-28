import React from "react";
import { useState } from "react";
import "./App.css";
function App() {
  const [change, setChange] = useState("");
  const [message, setMessage] = useState("");
  const [todoLists, setTodoLists] = useState([]);

  function handleClick() {
    if (change) {
      setTodoLists((todoLists) => [
        ...todoLists,
        { change: change, key: Math.floor(Math.random() * Date.now()) },
      ]);
      setChange("");
      console.log(change);
    }
  }
  function handleDelete(id) {
    const newTodo = todoLists.filter((item) => item.key !== id);
    setTodoLists(newTodo);
  }
  return (
    <div className="wholeDiv">
      <div className="all">
        <h1 className="title"> To-Do list</h1>

        <div className="form">
          <input
            value={change}
            onChange={(e) => setChange(e.target.value)}
            className="input"
            placeholder="Tasks..."
          ></input>
          <div onClick={() => handleClick()} className="btn1">
            +
          </div>
        </div>

        <div className="list">
          {todoLists.map((items) => {
            const { change, key } = items;
            return (
              <div className="item" key={key}>
                <div>{change}</div>
                <button className="btnD" onClick={() => handleDelete(key)}>
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
