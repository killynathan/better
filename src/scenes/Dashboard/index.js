import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const Dashboard = () => (
	<div style={styles.dashboard}>
		<Sidebar />
		<Main />
	</div>
);

const styles = {
	dashboard: {
		display: 'flex'
	}
}

export default Dashboard;
