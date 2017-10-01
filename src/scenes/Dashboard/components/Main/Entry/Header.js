import React from 'react';
import { greyishBlue, offWhite, grey, darkestGreyishBlue, blue } from 'constants/colors';

const Header = ({title, date, onTitleChange}) => (
  <div style={styles.header}>
    <div style={styles.titleWrapper}>
      <input
        style={styles.titleInput}
        value={title}
        onChange={onTitleChange}
      />
    </div>
    <div style={styles.dateAndControlsWrapper}>
      <p style={styles.date}>{date}</p>
      <ul style={styles.controls}>
        <li style={styles.control}><i className='mdi mdi-star' /></li>
        <li style={styles.control}><i className='mdi mdi-tag' /></li>
        <li style={styles.control}><i className='mdi mdi-delete' /></li>
      </ul>
    </div>
  </div>
);

const styles = {
  header: {
    marginBottom: 20
  },
  titleWrapper: {
    width: '100%',
    paddingBottom: 10,
    borderBottom: '1px solid ' + darkestGreyishBlue
  },
  titleInput: {
		height: 45,
		width: '100%',
		fontSize: 30,
		backgroundColor: greyishBlue,
		color: offWhite,
		border: 'none',
    outline: 'none'
	},
  dateAndControlsWrapper: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottom: '1px solid ' + darkestGreyishBlue
  },
	date: {
		fontSize: 15,
    display: 'inline-block'
	},
  controls: {
    listStyleType: 'none',
    color: blue,
    float: 'right'
  },
  control: {
    display: 'inline-block',
    fontSize: 18,
    marginRight: 10
  }
};

export default Header;
