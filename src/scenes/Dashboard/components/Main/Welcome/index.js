import React from 'react';
import { grey, offWhite } from 'constants/colors';

const Welcome = () => {
  return (
    <div style={styles.main}>
      <p style={styles.title}>Welcome to Better Every Day</p>
      <p>Add a new entry from the left!</p>
      <p>Add a new goal from the right!</p>
    </div>
  )
}

const styles = {
  main: {
    color: grey
  },
  title: {
    color: offWhite,
    fontSize: 25,
    marginBottom: 10
  }
}

export default Welcome;
