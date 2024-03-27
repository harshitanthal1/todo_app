import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';
import { Link } from 'react-router-dom';

function DisplayPage() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <p>{todo.text}</p>
          <Link to={`/update/${todo.id}`}>Update</Link>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
      <Link to="/create">Add Todo</Link>
    </div>
  );
}

export default DisplayPage;