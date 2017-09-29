import React from 'react';
import { greyishBlue, offWhite, grey } from 'constants/colors';

const Notes = ({ notes, onNotesChange }) => (
  <div
    style={styles.notes} >
    <p> Notes </p>
    <textarea
      style={styles.notesTextArea}
      value={notes}
      onChange={onNotesChange}/>
  </div>
);

const styles = {
  notes: {
		marginTop: 30,
    color: offWhite,
    fontSize: 20
	},
	notesTextArea: {
		marginTop: 10,
		width: '100%',
		height: 300,
		backgroundColor: greyishBlue,
		color: grey,
		border: 'none',
		resize: 'none',
		fontSize: 17,
		fontFamily: 'inherit'
	}
};

export default Notes;
