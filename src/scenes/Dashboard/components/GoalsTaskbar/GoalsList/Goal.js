import React from 'react';
import Collapsible from 'react-collapsible';

const Goal = () => (
  <Collapsible
    trigger='Become a software engineer'
    transitionTime={200}
    style={styles.goal}
  >
    <div style={styles.milestone}>
      <i
        className = 'mdi mdi-flag'
        style={styles.milestoneFlag}
      />
      <p style={styles.milestoneText}>Send out 25 applications</p>
    </div>
    <div style={styles.milestone}>
      <p>Send out 50 applications</p>
    </div>
    <div style={styles.milestone}>
      <p>Send out 100 applications</p>
    </div>
  </Collapsible>
);

const styles = {
  goal: {
    backgroundColor: 'yellow'
  },
  milestone: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20
  },
  milestoneFlag: {
    display: 'inline-block'
  },
  milestoneText: {
    display: 'inline-block'
  }
};

export default Goal;
