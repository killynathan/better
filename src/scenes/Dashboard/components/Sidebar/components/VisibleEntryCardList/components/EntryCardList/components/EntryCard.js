import React from 'react';

const EntryCard = ({ title, todos, onClick }) => (
	<li
		style={styles.entryCard}
		onClick={onClick}
	>
		<div>
			<i className='mdi mdi-check' style={styles.icon}/>
			<p style={styles.title}>
				  { title }
			</p>
		</div>
	</li>
);

const styles = {
	entryCard: {
		width: '100%',
		height: 40,
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		paddingLeft: 10
	},
	title: {
		marginLeft: 3,
		color: '#d7dae0', //'#9da5b4',
		fontSize: 15,
		fontWeight: 500,
		display: 'inline-block'
	},
	inlineBlock: {
		display: 'inline-block'
	},
	icon: {
		fontSize: 20,
		color: 'rgba(157, 165, 180, 0.6)',
		display: 'inline-block'
	}
}

export default EntryCard;
