import logo from './logo.svg';
import './App.css';
import TodoList from './ToDo/TodoList';
import PropTypes from 'prop-types';
import React from 'react';
import AddToDo from './ToDo/AddToDo';
const styles = {
  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },

}

function App() {
  const [todos, setTodos] = React.useState(
    [
      { id: 1, completed: false, title: 'Купить хлеб' },
      { id: 2, completed: false, title: 'Купить воду' },
      { id: 3, completed: false, title: 'Купить сало' },
      { id: 4, completed: false, title: 'Купить пепси' },
    ]
  )

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    )
  }
  function onSubmit(id) {
  setTodos(todos.filter(todo=>todo.id!==id))
  }
  function addTodo(title){
    setTodos(todos.concat([{
    title,
    id:Date.now(),
    completed:false  
    }]))
  }
  return (
    <div className='wrapper' style={styles.div}>
      <h1>ReactToDo</h1>
      <AddToDo onCreate={addTodo}/>
      <TodoList todos={todos} onToggle={toggleTodo} onSubmit={onSubmit} />
    </div>
  );
}
App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default App;
