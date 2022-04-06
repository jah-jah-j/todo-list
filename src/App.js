import './css/App.css'
import {useEffect, useState} from 'react'
import TodoList from './components/todo/TodoList'
import CreateTodos from './components/todo/CreateTodos'

function App() {
  const myTodos = [
    {id: 1, title: 'Купить молоко', description: 'Купить 100 литров молока', isChecked: false},
    {id: 2, title: 'Погладить кошку', description: 'Кошка Боня соскучилась', isChecked: false},
    {id: 3, title: 'Убраться дома', description: 'Пора бы уже', isChecked: true},
  ]

  const [todos, setTodos] = useState([]);

  const addNewTodo = (todo) => setTodos([...todos, todo]);

  const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));

  const editTodo = (todoChange) => {
    setTodos(todos.map(todo => todo.id === todoChange.id
      ? todoChange
      : todo))
  };

  useEffect(() => {
    setTodos(myTodos)
  }, [])


  return (
    <div className="App">
      <CreateTodos pushTodo={addNewTodo}/>
      <TodoList editTodo={editTodo} todoDelete={deleteTodo} todos={todos}/>
    </div>
  );
}

export default App;
