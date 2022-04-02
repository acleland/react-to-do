import React from 'react';

export default function NewToDo({ handleSubmit, onChange, newToDo }) {
  return (
    <form value={newToDo} onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a new to-do" value={newToDo} onChange={onChange} />
      <button>Go</button>
    </form>
  );
}
