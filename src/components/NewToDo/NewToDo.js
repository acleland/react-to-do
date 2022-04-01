import React from 'react';

export default function NewToDo({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a new to-do" />
      <button>Go</button>
    </form>
  );
}
