import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if(newTodo.trim() !== ''){
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_,i) => i!== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input type = "text" value = {newTodo} onChange={handleInputChange}/>
      <button onClick = {handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key = {index}>
            <div className='todoButton'>
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </div>
            <div className='todoText'>{todo}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo;
