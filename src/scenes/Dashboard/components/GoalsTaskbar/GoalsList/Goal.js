import React from 'react';
import Collapsible from 'react-collapsible';

const Goal = () => {
  let triggerElement = (
    <div style={styles.goal}>
      <i
        className = 'mdi mdi-chevron-down'
        style={styles.goalIcon}
      />
      <p style={styles.goalText}>become a software enginner</p>
    </div>
  );
  return (
    <Collapsible
      trigger={triggerElement}
      transitionTime={200}
      style={styles.goal}
    >
      <div style={styles.milestone}>
        <i
          className = 'mdi mdi-flag'
          style={styles.milestoneIcon}
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
};

const styles = {
  goal: {
    boxSizing: 'border-box',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    cursor: 'pointer'
  },
  goalIcon: {
    display: 'inline-block',
    marginRight: 5
  },
  goalText: {
    display: 'inline-block'
  },
  milestone: {
    boxSizing: 'border-box',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40
  },
  milestoneIcon: {
    display: 'inline-block'
  },
  milestoneText: {
    display: 'inline-block'
  }
};

export default Goal;
