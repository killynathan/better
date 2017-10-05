import React from 'react';
import { connect } from 'react-redux';
import SelfContainedInput from 'components/SelfContainedInput';
import { addGoal } from '../../services/goals';

const mapDispatchToProps = dispatch => ({
  onEnter: text => {
    dispatch(addGoal(text));
  }
});

let NewGoalInput = ({ onEnter }) => {
  return (
    <SelfContainedInput
      placeholder='New Goal'
      style={styles.input}
      onEnter={onEnter}
    />
  )
};

const styles = {
  input: {
    paddingLeft: 12,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 15
  }
}

NewGoalInput = connect(
  null,
  mapDispatchToProps
)(NewGoalInput);

export default NewGoalInput;
