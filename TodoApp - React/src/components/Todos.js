import React from 'react';
import TodoItem from './TodoItem';
import './Todos.css';

const Todos = (props) => {  //props de APP.JS

    let todosContent = <p style={{ color: 'white',  fontSize: '1.3rem'}}>No todos yet.</p>;

    if (props.items.length > 0) {
       todosContent = props.items.map((todo) => (
            <TodoItem     //cuando tiene al todoItem, le llega el ondelete.
              key={todo._id}  //en mongodb es _.id
              id={todo._id}    
              title={todo.title}
              onDelete={props.onDeleteItem}
            />
          ));
        }
  
    return (
      <div>
        <div className='todos'>
            {todosContent}
        </div>
      </div>
    );
};


export default Todos;