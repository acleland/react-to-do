import React, { useState, useEffect } from 'react';
import { getToDos, setComplete, createToDo } from '../../services/todo';
import ToDoList from '../../components/ToDoList/ToDoList';
import NewToDo from '../../components/NewToDo/NewToDo';
import './Main.css';

export default function Main() {
  const [todos, setToDos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newToDo, setNewToDo] = useState('');

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

  // Callbacks
  const toggleToDo = async (todo) => {
    await setComplete(todo.id, !todo.complete);
    const data = await getToDos();
    setToDos(data);
  };

  const onChange = (e) => {
    setNewToDo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdToDo = await createToDo(newToDo);
    setToDos([...todos, createdToDo]);
    setNewToDo('');
  };

  return (
    <div className="main">
      {error && <p>{error}</p>}
      <h1>Your To-Dos</h1>
      <ToDoList {...{ todos, toggleToDo }} />
      <NewToDo {...{ handleSubmit, onChange, newToDo }} />
    </div>
  );
}
