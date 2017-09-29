import React, { Component } from 'react';
import { connect } from 'react-redux';
import Entry from './Entry';
import { greyishBlue } from 'constants/colors';

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
			<Entry content={content}/>
		</div>
	);

}

const styles = {
	main: {
		backgroundColor: greyishBlue,
		flex: 1
	}
}

Main = connect(
	mapStateToProps
)(Main);

export default Main;
