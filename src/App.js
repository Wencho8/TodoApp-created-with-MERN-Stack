import React, { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

function App() {

  const [todos, setTodos] = useState([]); //bottom up //recibe arraylist de objetos.

  const addTodoHandler = (todo) => { //todo es elemento
    setTodos((prevTodos) => {  //funcion de useState
      return [todo, ...prevTodos];    //array c el nuevo y los viejos.
    });
  };

  const deleteItemHandler = (todoId) => {
    setTodos((prevTodos) => { //funcion de useState
      console.log(todoId);
      const updatedTodos = prevTodos.filter(todo => todo.id !== todoId); //todo es un elemento que itera
      return updatedTodos;
    });

  };


  return (
    <div className='app'>
      <div className='container'>
        <section className='header'>
          <h1>To-do List</h1>
        </section>
        <section>
          <NewTodo onAddTodo={addTodoHandler}/>  {/*recibe de NewTodo por bottom up */}
        </section>
        <section >
           <Todos items={todos} onDeleteItem={deleteItemHandler}/> {/* Cuando interactua con TODOS ahi es donde puede recibir el mensaje de delete. */}
        </section>
      </div>
    </div>
  );
}

export default App;
