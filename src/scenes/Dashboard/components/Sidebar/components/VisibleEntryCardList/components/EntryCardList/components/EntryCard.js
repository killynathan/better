import React from 'react';

const EntryCard = ({ date, todos, onClick }) => (
	<li
		style={styles.entryCard}
		onClick={onClick}
	>
		<div>
			<p style={styles.title}>{ date }</p>
		</div>
	</li>
);

const styles = {
	entryCard: {
		width: '100%',
		height: 60,
		display: 'flex',
		alignItems: 'center',
		color: '#9da5b4',
		cursor: 'pointer'
	},
	title: {
		marginLeft: 10,
		fontSize: 15
	}
}

export default EntryCard;
