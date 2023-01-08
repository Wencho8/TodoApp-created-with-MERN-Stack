import React, { useState } from 'react';

import './TodoForm.css';

const TodoForm = (props) => {


  const [enteredTitle, setEnteredTitle] = useState('');
  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

 

  const submitHandler = (event) => {
    event.preventDefault();

    const todoData = {
      title: enteredTitle,
    };
    
    if (todoData.title.trim().length !== 0) { //para que no se mande en blanco.
      props.onSaveTodoData(todoData); 
      setEnteredTitle('');
  }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-form_controls'>
        <div className='new-form__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className='new-form__actions'>
        <button type='submit'>Add Todo item</button>
        <button type='button' onClick={props.Cancel}>Cancel</button>
      </div>
    </form>
  );
};

export default TodoForm;