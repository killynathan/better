import React from 'react';
import VisibleEntryButtonList from '../Containers/VisibleEntryButtonList';
import AddEntryButton from '../Containers/AddEntryButton';

const Sidebar = () => (
	<div style={styles.sidebar}>
		<AddEntryButton />
		<VisibleEntryButtonList />
	</div>
);

const styles = {
	sidebar: {
		width: 250,
		height: '100vh',
		backgroundColor: 'pink'
	}
}

export default Sidebar;