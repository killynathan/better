import React, { Component } from 'react';
import { connect } from 'react-redux';
import { greyishBlue, offWhite, grey } from 'constants/colors';
import Header from './Header';
import Todos from './Todos';
import Notes from './Notes';
import Tabs from './Tabs';
import { toggleTodo, changeTitle, changeNotes, deleteTodo, addTodo, deleteEntry, moveTodo } from '../../../services/entries';

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
	},
	onDeleteEntryClick: (entryId) => {
		dispatch(deleteEntry(entryId));
	},
	onMoveTodo: (entryId, from, to) => {
		dispatch(moveTodo(entryId, from, to));
	}
});

class Entry extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mode: 'todos'
		}
	}

	toggleMode(_mode) {
		this.setState({
			mode: _mode
		});
	}

	render() {
		var { content, onCheckboxClick, onTitleChange, onNotesChange, onDeleteClick, onAddTodoClick, onMoveTodo, onDeleteEntryClick } = this.props;
		return (
			<div style={styles.main}>

				<Header
					title={content.title}
					date={content.date}
					onTitleChange={e => onTitleChange(content.id, e.target.value)}
					onDeleteEntryClick={() => {
						let didConfirm = confirm('are you sure you want to delete this entry?');
						if (didConfirm) onDeleteEntryClick(content.id);
					}}
				/>

				<Tabs
					handleClick = {(mode) => this.toggleMode(mode)}
					mode = {this.state.mode} />

				{
					this.state.mode === 'todos' &&
						<Todos
							todos={content.todos}
							onCheckboxClick={i => onCheckboxClick(content.id, i)}
							onDeleteClick={i => onDeleteClick(content.id, i)}
							onAddTodoClick={text => onAddTodoClick(content.id, text)}
							onMoveTodo={(from, to) => onMoveTodo(content.id, from, to)}
						/>
				}

				{
					this.state.mode === 'notes' &&
					<Notes
						notes={content.notes}
						onNotesChange={e => onNotesChange(content.id, e.target.value)}
					/>
				}
			</div>
		)
	};
};

const styles = {
	main: {
		color: grey,
		width: '90%',
		margin: '0 auto'
	}
};

Entry = connect(
	null,
	mapDispatchToProps
)(Entry);

export default Entry;
