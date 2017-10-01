import React from 'react';
import GoalsList from './GoalsList';

const GoalsTaskbar = () => (
  <div
    style={styles.main}
  >
    <GoalsList />
  </div>
);

const styles = {
  main: {
    height: '100vh',
    width: 300,
    backgroundColor: '#16181C',
    float: 'right'
  }
};

export default GoalsTaskbar;
