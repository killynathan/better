import React from 'react';

const EntryButton = ({ date, todos, onClick }) => (
	<li
		onClick={onClick}
	>
		<div>
			<p> {date} </p>
			<ul> {todos} </ul>
		</div>
	</li>
);

export default EntryButton;