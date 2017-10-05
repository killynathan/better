import React from 'react';
import Collapsible from 'react-collapsible';
import NewMilestoneInput from './NewMilestoneInput';

const Goal = ({ goal }) => {
  let triggerElement = (
    <div style={styles.goal}>
      <i
        className = 'mdi mdi-chevron-down'
        style={styles.goalIcon}
      />
      <p style={styles.goalText}>{goal.text}</p>
    </div>
  );
  return (
    <Collapsible
      trigger={triggerElement}
      transitionTime={100}
      style={styles.goal}
    >
      <NewMilestoneInput
        goalId = {goal.id}
      />
      {
        goal.milestones.map((milestone, i) =>
          <div style={styles.milestone} key={i}>
            <i
              className = 'mdi mdi-flag'
              style={styles.milestoneIcon}
            />
            <p style={styles.milestoneText}>{milestone.text}</p>
          </div>
        )
      }
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
    cursor: 'pointer',
    fontSize: 15
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
    paddingLeft: 40,
    fontSize: 15
  },
  milestoneIcon: {
    display: 'inline-block',
    marginRight: 5
  },
  milestoneText: {
    display: 'inline-block'
  }
};

export default Goal;
