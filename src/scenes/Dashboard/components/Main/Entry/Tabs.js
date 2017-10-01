import React from 'react';
import { green, grey } from 'constants/colors';

const Tabs = ({ handleClick, mode }) => (
  <div style={styles.tabs}>
    <i
      className='mdi mdi-checkbox-multiple-marked-outline'
      style={mode === 'todos' ? styles.active : styles.tab}
      onClick={() => handleClick('todos')}
    />
    <i
      className='mdi mdi-file-document-box'
      style={mode === 'notes' ? styles.active : styles.tab}
      onClick={() => handleClick('notes')}
    />
  </div>
)

const styles = {
	tabs: {
		marginBottom: 20
	},
	tab: {
		fontSize: 25,
		marginRight: 15,
    cursor: 'pointer',
    color: grey,
    opacity: 0.3
	},
  active: {
    fontSize: 25,
		marginRight: 15,
    cursor: 'pointer',
    color: green
  }
};

export default Tabs;
