import React from 'react';

const ActiveEntry = ({ entry }) => {
	if (entry === -1) { //check default
		return (
			<h1> Welcome! </h1>
		)
	}
	return (
		<div>
			<h1> {entry.date} </h1>
			<ul> {entry.todos} </ul>
			<p> {entry.notes} </p>
		</div>
	)
};

export default ActiveEntry;