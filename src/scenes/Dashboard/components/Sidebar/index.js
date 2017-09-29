import React from 'react';
import Controls from './components/Controls';
import VisibleEntryCardList from './components/VisibleEntryCardList';

const Sidebar = () => (
	<div style={styles.sidebar}>
		<Controls />
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
}

export default Sidebar;
