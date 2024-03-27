import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo } from '../features/todo/todoSlice';
import { useParams, useHistory } from 'react-router-dom';

function UpdatePage() {
  const { id } = useParams();
  const todo = useSelector(state => state.todos.find(todo => todo.id === parseInt(id)));
  const [text, setText] = useState(todo ? todo.text : '');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch(updateTodo({
      id: parseInt(id),
      text,
    }));
    history.push('/');
  };

  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
}

export default UpdatePage;