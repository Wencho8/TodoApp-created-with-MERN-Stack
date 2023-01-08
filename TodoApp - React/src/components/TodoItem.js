import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

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
      <h2 style={{textDecorationColor: 'black' ,textDecorationLine:  !isChecked ? 'none' : 'line-through', textDecorationThickness: '3px'}}>{props.title}</h2>
      <div className='buttonWrapper'>
       <input type='checkbox' value={isChecked} onChange={handleChange} />
       <TrashIcon onClick={deleteHandler} className='icon'/>
      </div>
    </div>
  );
}

export default TodoItem;
