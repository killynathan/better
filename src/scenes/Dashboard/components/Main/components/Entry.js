import React from 'react';

const Entry = ({ content }) => {
	if (content === -1) { //check default
		return (
			<div style={styles.main}>
				<h1> Welcome! </h1>
			</div>
		)
	}
	return (
		<div style={styles.main}>
			<p style={styles.title}> {content.date} </p>
			<ul style={styles.todos}>{content.todos.map(todo => <li>{todo}</li>)}</ul>
			<p> {content.notes} </p>
		</div>
	)
};

const styles = {
	main: {
		backgroundColor: '#282c34',
		flex: 1,
		color: '#9da5b4'
	},
	title: {
		fontSize: 50
	},
	todos: {
		listStyleType: 'none'
	}
}

export default Entry;
