import React, {useState} from 'react';
import c from './module/todo.module.css'
import EditTodo from './EditTodo'


const TodoItem = ({todo, index, onClickDelete, onEdit}) => {
	const [displayForm, setDisplayForm] = useState({display: 'none'});
	const [displayContent, setDisplayContent] = useState(null);


	const toggleDisplays = () => {
		if (displayForm.display === 'none') {
			setDisplayForm({display: 'block'})
		} else {
			setDisplayForm({display: 'none'})
		}

		if (displayContent === null) {
			setDisplayContent({display: 'none'})
		} else {
			setDisplayContent(null)
		}
	}

	return (
		<li className={c.item}>
			<div className={c.itemWrapper} style={displayContent}>
				<label className={todo.isChecked
					? `${c.checkbox} ${c.checked}`
					: c.checkbox}>

					<input className={c.checkbox}
								 type="checkbox"
								 checked={todo.isChecked}
								 onChange={() => {
									 todo.isChecked = !todo.isChecked
									 onEdit(todo)
								 }}
					/>
				</label>
				<h3 className={todo.isChecked ? c.through : ''}>
					{index + 1}. {todo.title}
				</h3>
				<p className={todo.isChecked ? c.through : ''}>
					{todo.description}
				</p>
				<button onClick={() => onClickDelete(todo.id)}
								className={c.delete}
								type="button"
				/>
				<button onClick={toggleDisplays}
								className={c.add}
								type="button"
				/>
			</div>
			<div style={displayForm}>
				<EditTodo toggle={toggleDisplays} todo={todo} editTodo={onEdit}/>
			</div>
		</li>
	);
};

export default TodoItem;
