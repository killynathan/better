import React from 'react';
import GoalsList from './GoalsList';
import NewGoalInput from './NewGoalInput';
import { darkestGreyishBlue, grey } from 'constants/colors';

const GoalsGuide = () => (
  <div
    style={styles.main}
  >
    <NewGoalInput />
    <GoalsList />
  </div>
);

const styles = {
  main: {
    height: '100vh',
    width: 300,
    backgroundColor: darkestGreyishBlue,
    float: 'right',
    fontSize: 15,
    color: grey
  }
};

export default GoalsGuide;
