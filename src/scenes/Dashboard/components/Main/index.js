import React, { Component } from 'react';
import { connect } from 'react-redux';
import Entry from './Entry';
import { greyishBlue } from 'constants/colors';
import { Scrollbars } from 'react-custom-scrollbars';

const getActiveEntryFromId = (entries, id) => {
	if (id === -1) return -1; // none active. show welcome page!
	return entries[id];
}

const mapStateToProps = state => {
	return {
		content: getActiveEntryFromId(state.dashboard.entries, state.dashboard.activeContent)
	}
}

let Main = ({ content }) => {
	if (content === -1) {
		return (
			<div>
				<h1> Welcome! </h1>
			</div>
		);
	}
	return (
		<div style={styles.main}>
			<Scrollbars>
			<Entry content={content}/>
			</Scrollbars>
		</div>
	);

}

const styles = {
	main: {
		backgroundColor: greyishBlue,
		flex: 1,
		height: '100vh'
	}
}

Main = connect(
	mapStateToProps
)(Main);

export default Main;
