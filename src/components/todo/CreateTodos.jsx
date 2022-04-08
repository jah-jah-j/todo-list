import React, {useState} from 'react';
import CreateTodoForm from './CreateTodoForm'

const CreateTodos = ({pushTodo}) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	function changeTitle(e) {
		setTitle(e.target.value)
	}

	function changeDescription(e) {
		setDescription(e.target.value)
	}

	function submitForm(e) {
		e.preventDefault();
		if (title !== '' && description !== '') {
			const todo = {
				id: Date.now(),
				title: title,
				description: description,
				isChecked: false,
			}
			pushTodo(todo)
			setTitle('')
			setDescription('')
		}
	}

	return (
		<CreateTodoForm onChangeDescription={changeDescription}
										onChangeTitle={changeTitle}
										title={title}
										description={description}
										onSubmit={submitForm}
		/>
	);
};

export default CreateTodos;
