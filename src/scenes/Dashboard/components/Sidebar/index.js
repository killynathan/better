import React from 'react';
import AddEntryButton from './components/AddEntryButton';
import VisibleEntryCardList from './components/VisibleEntryCardList';

const Sidebar = () => (
	<div style={styles.sidebar}>
		<AddEntryButton />
		<VisibleEntryCardList />
	</div>
);

const styles = {
	sidebar: {
		height: '100vh',
		width: 240,
		borderRight: 'solid 1px rgb(24, 26, 31)',
		backgroundColor: '#21252b'
	}
}

export default Sidebar;
