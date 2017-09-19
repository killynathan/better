import React from 'react';
import { connect } from 'react-redux';
import { addEntry } from '../Redux/actions';

let AddEntryButton = ({	dispatch }) => (
		<button 
			style = { styles.button }
			onClick = { e => dispatch(addEntry((new Date()).toDateString(), ['send apps', 'gym', 'finsih project']))} 
		>+</button>
);

const styles = {
	button: {
		height: 50,
		width: 50
	}
}

AddEntryButton = connect()(AddEntryButton);

export default AddEntryButton;