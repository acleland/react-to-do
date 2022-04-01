import React, { useState, useEffect } from 'react';
import { getToDos, setComplete } from '../../services/todo';
import ToDoList from '../../components/ToDoList/ToDoList';
import NewToDo from '../../components/NewToDo/NewToDo';

export default function Main() {
  const [todos, setToDos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getToDos();
        setToDos(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const toggleToDo = async (todo) => {
    await setComplete(todo.id, !todo.complete);
    const data = await getToDos();
    setToDos(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit called');
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>Your To-Dos</h1>
      <ToDoList {...{ todos, toggleToDo }} />
      <NewToDo {...{ handleSubmit }} />
    </div>
  );
}
