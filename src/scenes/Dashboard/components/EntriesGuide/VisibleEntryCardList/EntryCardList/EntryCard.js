import React from 'react';

import { darkestGreyishBlue } from 'constants/colors';

const EntryCard = ({ title, todos, onClick, isActive }) => (
	<div
		style={isActive ? styles.active : styles.entryCard}
		onClick={onClick}
	>
		<i className='mdi mdi-check' style={styles.icon}/>
		<p style={styles.title}>
			  { title }
		</p>
	</div>
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
	active: {
		width: '100%',
		height: 40,
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		paddingLeft: 10,
		backgroundColor: darkestGreyishBlue
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
