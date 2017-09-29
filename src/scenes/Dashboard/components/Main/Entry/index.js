import React from 'react';
import { connect } from 'react-redux';
import { greyishBlue, offWhite, grey } from 'constants/colors';
import Header from './Header';
import Todos from './Todos';
import Notes from './Notes';
import { toggleTodo, changeTitle, changeNotes, deleteTodo, addTodo } from '../../../services/entries';

const mapDispatchToProps = dispatch => ({
	onCheckboxClick: (entryId, todoIndex) => {
		dispatch(toggleTodo(entryId, todoIndex))
	},
	onTitleChange: (entryId, text) => {
		dispatch(changeTitle(entryId, text))
	},
	onNotesChange: (entryId, text) => {
		dispatch(changeNotes(entryId, text));
	},
	onDeleteClick: (entryId, todoIndex) => {
		dispatch(deleteTodo(entryId, todoIndex));
	},
	onAddTodoClick: (entryId, text) => {
		dispatch(addTodo(entryId, text));
	}
});

let Entry = ({ content, onCheckboxClick, onTitleChange, onNotesChange, onDeleteClick, onAddTodoClick }) => {
	return (
		<div style={styles.main}>

			<Header
				title={content.title}
				date={content.date}
				onTitleChange={e => onTitleChange(content.id, e.target.value)} />

			<Todos
				todos={content.todos}
				onCheckboxClick={i => onCheckboxClick(content.id, i)}
				onDeleteClick={i => onDeleteClick(content.id, i)}
				onAddTodoClick={text => onAddTodoClick(content.id, text)} />

			<Notes
				notes={content.notes}
				onNotesChange={e => onNotesChange(content.id, e.target.value)} />
		</div>
	)
};

const styles = {
	main: {
		color: grey,
		paddingTop: 50,
		width: '90%',
		margin: '0 auto'
	}
};

Entry = connect(
	null,
	mapDispatchToProps
)(Entry);

export default Entry;
