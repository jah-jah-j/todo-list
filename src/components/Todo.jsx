import React, {useEffect, useState} from 'react';
import TodoList from './todo/TodoList'
import CreateTodos from './todo/CreateTodos'

const Todo = () => {
	const myTodos = [
		{id: 1, title: 'Do 1', description: 'Faster', isChecked: false,},
		{id: 2, title: 'Do 2', description: 'Slower', isChecked: false,},
		{id: 3, title: 'Do 3', description: 'Faster', isChecked: true,},
	];
	const [todos, setTodos] = useState([]);
	const [todosFiltered, setTodosFiltered] = useState(todos);
	const [display, setDisplay] = useState({display: 'none'});
	const [isFiltered, setIsFiltered] = useState(false);


	const addNewTodo = (todo) => {
		setIsFiltered(false);
		setTodos([...todos, todo]);
		toggleDisplay();
	}

	const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));

	const filterTodo = (e) => {
		removeCurrentClass('.filter-buttons .button', true);
		setIsFiltered(true);
		filter(e);
		e.target.classList.add('active')
	};

	const editTodo = (todoChange) => {
		setTodos(todos.map(todo => todo.id === todoChange.id ? todoChange : todo))
		setIsFiltered(false);
		removeCurrentClass('.filter-buttons .button', true);
	};

	const clearCompletedTodo = () => setTodos(todos.filter(todo => todo.isChecked !== true));

	const toggleDisplay = () => {
		display.display === 'block' ? setDisplay({display: 'none'}) : setDisplay({display: 'block'})
	}

	useEffect(() => {
		setTodos(myTodos)
	}, [])

	function filter(e) {
		const filter = e.target.dataset.key;

		if (filter.toLowerCase() === 'all') {
			setTodosFiltered(todos)
			setIsFiltered(false);
		}
		if (filter.toLowerCase() === 'complete') {
			setTodosFiltered(todos.filter(todo => todo.isChecked === true))
		}
		if (filter.toLowerCase() === 'uncompleted') {
			setTodosFiltered(todos.filter(todo => todo.isChecked === false))
		}
	}

	function removeCurrentClass(selector, isMultiple = true) {
		if (isMultiple) {
			const arr = document.querySelectorAll(selector);
			for (let item of arr) {
				item.classList.remove('active')
			}
		}
		document.querySelector(selector).classList.remove('active')
	}

	return (
		<div>
			<div className="headButtons">
				<button type="button" className="clearTodos" onClick={clearCompletedTodo}>Удалить<br/>выполненные</button>

				<div className="filter-buttons">
					<button type="button" className="button" data-key="complete" onClick={filterTodo}>Выполненные</button>
					<button type="button" className="button" data-key="uncompleted" onClick={filterTodo}>Невыполненные</button>
					<button type="button" className="button" data-key="all" onClick={filterTodo}>Все</button>
				</div>
			</div>

			<TodoList
				filterTodo={filterTodo}
				editTodo={editTodo}
				todoDelete={deleteTodo}
				todos={isFiltered ? todosFiltered : todos}
			/>

			<div className="form-wrapper" style={display}>
				<button onClick={toggleDisplay} type="button" className="close-btn"/>
				<CreateTodos pushTodo={addNewTodo}/>
			</div>

			<button style={display.display === 'block' ? {display: 'none'} : {display: 'block'}}
							className="add-new-todo" type="button"
							onClick={toggleDisplay}>
				Добавить задачу
			</button>
		</div>
	);
};

export default Todo;
