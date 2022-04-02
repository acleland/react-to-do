import React from 'react';
import './ToDoList.css';

export default function ToDoList({ todos, toggleToDo }) {
  return (
    <ul className="to-do-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            name={todo.id}
            checked={todo.complete}
            onClick={() => {
              toggleToDo(todo);
            }}
          />
          <label htmlFor={todo.id} className={todo.complete ? 'complete' : ''}>
            {todo.description}
          </label>
        </li>
      ))}
    </ul>
  );
}
