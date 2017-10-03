import React from 'react';
import { connect } from 'react-redux';
import Goal from './Goal';
import { grey } from 'constants/colors';

const mapStateToProps = state => ({
  goals: state.dashboard.goals
});

let GoalsList = ({ goals }) => (
  <div style={styles.goalList}>
    {
      goals.map((goal, i) =>
        <Goal goal={goal} key={i}/>
      )
    }
  </div>
);

const styles = {
  goalList: {
    color: grey
  }
};

GoalsList = connect(
  mapStateToProps
)(GoalsList);

export default GoalsList;
