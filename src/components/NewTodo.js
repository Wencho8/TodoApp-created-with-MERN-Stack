import React, { useState } from 'react';

import TodoForm from './TodoForm';  //check the props in TodoForm
import './NewTodo.css';

const NewTodo = (props) => {

  const [isActive, setIsActive] = useState(false); //by default is false isActive

  const saveDataHandler = (enteredTodoData) => {

    const todoData = {
      ...enteredTodoData,
      id: Math.random().toString() //should be different.
    };
    console.log(todoData.id);
    props.onAddTodo(todoData);  //Envia a APP.JS el objeto de arriba todoData
  };

  const isActiveTrue = () => {
    setIsActive(true);
  };

  const isActivefalse = () => {
    setIsActive(false);
  };
  

  return (
    <div className='new-todo'>
      {!isActive && (
        <button onClick={isActiveTrue}>New Todo</button>
      )}
      {isActive && (
        <TodoForm
          onSaveTodoData={saveDataHandler} //comes from todoForm
          Cancel={isActivefalse}
        />
      )}
    </div>
  );
};

export default NewTodo;