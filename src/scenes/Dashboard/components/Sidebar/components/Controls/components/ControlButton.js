import React from 'react';
import { connect } from 'react-redux';
import { addEntry } from '../../../../../services/entries';

let ControlButton = ({	onClick, iconName }) => (
		<div
			style = { styles.button }
			onClick = {onClick}
		>
			<i className={iconName} style={styles.icon} />
		</div>
);

const styles = {
	button: {
		height: '100%',
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer'
	},
	icon: {
		fontSize: 20,
		color: 'rgb(38, 139, 210)'
	}
}

export default ControlButton;
