import React from 'react';
import { connect } from 'react-redux';
import SelfContainedInput from 'components/SelfContainedInput';
import { addMilestone } from '../../../../services/goals';

// TESTING

const mapDispatchToProps = dispatch => ({
  onEnter: (id, text) => {
    dispatch(addMilestone(id, text));
  }
});

let NewMilestoneInput = ({ goalId, onEnter }) => {
  return (
    <SelfContainedInput
      placeholder='New Milestone'
      style={styles.input}
      onEnter={(text) => onEnter(goalId, text)}
    />
  )
}

const styles = {
  input: {
    paddingLeft: 30
  }
}

NewMilestoneInput = connect(
  null,
  mapDispatchToProps
)(NewMilestoneInput);

export default NewMilestoneInput;
