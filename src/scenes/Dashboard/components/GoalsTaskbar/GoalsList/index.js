import React from 'react';
import Goal from './Goal';
import { grey } from 'constants/colors';

const GoalsList = () => (
  <div style={styles.goalList}>
    <Goal />
    <Goal />
  </div>
);

const styles = {
  goalList: {
    color: grey
  }
};

export default GoalsList;
