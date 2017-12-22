import React from 'react';
import { connect } from 'react-redux'

import { addEntry } from '../../../services/entries';

import ControlButton from './ControlButton';

const mapStateToProps = state => ({
  state: state
});

let Controls = ({ dispatch, state }) => (
  <div style={styles.controls}>
    {/*<ControlButton
      iconName = 'mdi mdi-plus'
      onClick = { () => dispatch(addEntry((new Date()).toDateString()))}
    />
    <ControlButton
      iconName = 'mdi mdi-filter'
      onClick = { () => dispatch(addEntry((new Date()).toDateString(), ['send apps', 'gym', 'finsih project']))}
    />*/}
    <ControlButton
      iconName = 'mdi mdi-content-save'
      onClick = { () => window.localStorage.setItem('liveBetter', JSON.stringify(state))}
    />
  </div>
);

const styles = {
  controls: {
    height: 50,
    width: '100%',
    borderBottom: 'solid 1px rgb(24, 26, 31)',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
    boxSizing: 'border-box'
  }
}

Controls = connect(mapStateToProps)(Controls);

export default Controls;
