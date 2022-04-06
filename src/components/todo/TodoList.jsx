import React from 'react';
import TodoItem from './TodoItem'
import classes from './module/todo.module.css'

const TodoList = ({todos, todoDelete, editTodo}) => {

	const countTodos = () => {
		const mod100 = todos.length % 100;
		const mod10 = todos.length % 10;

		if (mod100 >= 11 && mod100 <= 14) return todos.length + ' задач'

		if (mod10 === 1) return todos.length + ' задача'

		if (mod100 <= 4 && mod100 >= 2) return todos.length + ' задачи'

		return todos.length + ' задач'
	}

	if (!todos.length) {
		return (
			<h2 className={classes.empty}>Дел нет, Добби свободен</h2>
		)
	}

	return (
		<div style={{marginTop: 20}}>
			<h2 className={classes.title}>У вас {countTodos()} </h2>
			<ul className={classes.list}>

				{todos.map((todo, index) =>
					<TodoItem onClickDelete={todoDelete}
										key={todo.id}
										todo={todo}
										index={index}
										onEdit={editTodo}
					/>
				)}
			</ul>
		</div>
	)
};

export default TodoList;
