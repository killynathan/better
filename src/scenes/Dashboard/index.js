import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import GoalsTaskbar from './components/GoalsTaskbar';

const Dashboard = () => (
	<div style={styles.dashboard}>

		<Sidebar />
		<Main />
		<GoalsTaskbar />
	</div>
);

const styles = {
	dashboard: {
		display: 'flex'
	}
}

export default Dashboard;
