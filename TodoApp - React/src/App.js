import React, { useEffect, useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

function App() {

  const [todos, setTodos] = useState([]); //bottom up //recibe arraylist de objetos.


  const addTodoHandler =  async (todo) => { //recibe de NewTodo por bottom up
    fetch('http://localhost:5000/todos/addTodo', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      }, 
    }).then((response) => {
      if (response.ok) {
        fetcher(); //fetch todos again
      }
    });
    
  } 

  

  const fetcher = async () => {
    const response = await fetch('http://localhost:5000/todos/getTodos');
    const data = await response.json();
    setTodos(data.todos); //arraylist de todos
  };

  useEffect(() => {
    fetcher();
  }, []);


  

  const deleteItemHandler = (todoId) => {
    
    fetch('http://localhost:5000/todos/deleteTodo', {
      method: 'DELETE',                                  //DELETE
      body: JSON.stringify({id: todoId}),  //send id
      headers: {
        'Content-Type': 'application/json',
      }, 
    }).then((response) => {
      if (response.ok) {
        fetcher();       //fetch todos again
      } 
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
           <Todos items={todos}  onDeleteItem={deleteItemHandler}/> {/* Cuando interactua con TODOS ahi es donde puede recibir el mensaje de delete. */}
        </section>
      </div>
    </div>
  );
}

export default App;
