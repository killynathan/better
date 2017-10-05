import React from 'react';
import EntriesGuide from './components/EntriesGuide';
import Main from './components/Main';
import GoalsGuide from './components/GoalsGuide';

const Dashboard = () => (
	<div style={styles.dashboard}>

		<EntriesGuide />
		<Main />
		<GoalsGuide />
	</div>
);

const styles = {
	dashboard: {
		display: 'flex'
	}
}

export default Dashboard;
