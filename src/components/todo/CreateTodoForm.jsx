import React from 'react';
import classes from './module/todo.module.css'


const CreateTodoForm = ({onSubmit, description, title, onChangeDescription, onChangeTitle}) => {
	return (
		<form onSubmit={onSubmit} className={classes.form}>
			<input value={title}
						 onChange={onChangeTitle}
						 name="title"
						 type="text"
						 placeholder="Введите заголовок"
			/>
			<textarea value={description}
								onChange={onChangeDescription}
								name="description"
								placeholder="Введите текст"
			/>
			<div className={classes.buttonWrapper}>
				<button className={classes.button} type="submit"/>
			</div>
		</form>
	);
};

export default CreateTodoForm;
