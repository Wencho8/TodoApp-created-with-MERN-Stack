import React, { useState } from 'react';

import './TodoItem.css';




const TodoItem = (props) => { //en props viene el "Todo"

  const [isChecked, setChecked] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      setChecked(true);
    }
    else {
      setChecked(false);
    }

  }

  const deleteHandler = () => {
    props.onDelete(props.id); //como vienen de props lo que se manda es el id, tambien se puede mandar titulo, pero id es identificado.
  };  //EN PROPS SE LLAMA KEY

  return (
    <div className='todo-item'>
      <div className='todo-item__description'>
        <h2 style={{textDecorationColor: 'green' ,textDecorationLine:  !isChecked ? 'none' : 'line-through'}}>{props.title}</h2>
      </div>
      <input type='checkbox' value={isChecked} onChange={handleChange} />
      <button type='button' className='todo-item' onClick={deleteHandler}>X</button>
    </div>
  );
}

export default TodoItem;
