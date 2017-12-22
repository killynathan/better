import React from 'react';
import { connect } from 'react-redux'
import { addEntry } from '../../services/entries';
import GuideItem from 'components/GuideItem';

let AddEntryButton = ({ dispatch }) => (
  <GuideItem
		iconClassName = 'mdi mdi-plus'
		text = 'New entry'
    onClick = { () => dispatch(addEntry((new Date()).toDateString()))}
	/>
);
AddEntryButton = connect()(AddEntryButton);

export default AddEntryButton; 
