import React from "react";
import { useState } from "react";
function List({ message }) {
  const [todoLists, setTodoLists] = useState([]);
  setTodoLists([message]);
  return (
    <div>
      {todoLists.map((items) => {
        return (
          <div>
            <ol>{items}</ol>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
