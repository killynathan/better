import React from 'react';
import { darkestGreyishBlue, offWhite, darkGreyishBlue, greyishBlue } from 'constants/colors';

const GuideItem = ({ onClick, iconClassName, text, isActive }) => {

  let item;

  const highlight = () => {
    if (!isActive) item.style.backgroundColor = darkestGreyishBlue;
  };

  const unHighlight = () => {
    if (!isActive) item.style.backgroundColor = darkGreyishBlue;
  };

  return (
    <div
      ref={element => {item = element}}
  		style={isActive ? styles.active : styles.item}
  		onClick={onClick}
      onMouseOver={highlight}
      onMouseOut={unHighlight}
  	>
  		<i className={iconClassName} style={styles.icon}/>
  		<p style={styles.title}>
  			  { text }
  		</p>
  	</div>
  )
};

let _item = {
  width: '100%',
  paddingTop: 8,
  paddingBottom: 8,
  cursor: 'pointer',
  paddingLeft: 10,
  boxSizing: 'border-box'
}

const styles = {
	item: _item,
	active: {
		..._item,
		backgroundColor: greyishBlue
	},
	title: {
		color: offWhite,
		fontSize: 15,
		fontWeight: 500,
		display: 'inline-block',
    position: 'relative',
    top: -1
	},
	icon: {
		fontSize: 20,
		color: 'rgba(157, 165, 180, 0.6)',
		display: 'inline-block',
    marginRight: 7
	}
}

export default GuideItem;
