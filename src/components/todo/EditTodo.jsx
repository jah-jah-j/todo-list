import React, {useState} from 'react';
import EditTodoForm from './EditTodoForm'

const EditTodo = ({todo, editTodo, toggle}) => {
	const [title, setTitle] = useState(todo.title);
	const [description, setDescription] = useState(todo.description);

	function changeTitle(e) {
		setTitle(e.target.value)
	}

	function changeDescription(e) {
		setDescription(e.target.value)
	}

	function submitChanges(e) {
		e.preventDefault();
		if (title !== '' && description !== '') {
			const newTodo = {
				id: todo.id,
				title: title,
				description: description,
				isChecked: false,
			}
			editTodo(newTodo)
		}
		toggle();
	}

	return (
		<EditTodoForm onChangeDescription={changeDescription}
									onChangeTitle={changeTitle}
									title={title}
									description={description}
									onSubmit={submitChanges}
		/>
	);
};

export default EditTodo;
