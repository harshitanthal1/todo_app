import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import {useNavigate } from 'react-router-dom';

function CreatePage() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSubmit = () => {
    dispatch(addTodo({
      id: Date.now(),
      text: todo,
    }));
    history.push('/');
  };

  return (
    <div>
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default CreatePage;