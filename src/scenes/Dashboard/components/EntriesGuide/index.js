import React from 'react';
import Controls from './Controls';
import VisibleEntryCardList from './VisibleEntryCardList';
import AddEntryButton from './AddEntryButton';

let EntriesGuide = () => (
	<div style={styles.sidebar}>
		<Controls />
		<AddEntryButton />
		<VisibleEntryCardList />
	</div>
);

const styles = {
	sidebar: {
		height: '100vh',
		width: 220,
		borderRight: 'solid 1px rgb(24, 26, 31)',
		backgroundColor: '#21252b'
	}
};

export default EntriesGuide;
