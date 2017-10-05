import React, { Component } from 'react';
import { connect } from 'react-redux';
import Entry from './Entry';
import Welcome from './Welcome';
import { greyishBlue } from 'constants/colors';
import { Scrollbars } from 'react-custom-scrollbars';

const getActiveContent = (entries, id) => {
	if (id === -1) return -1; // none active. show welcome page!
	for (let entry of entries) {
		if (entry.id === id) return entry;
	}
	return -1;
}

const mapStateToProps = state => {
	return {
		content: getActiveContent(state.dashboard.entries, state.dashboard.activeContent)
	}
}

let Main = ({ content }) => {
	if (content === -1) {
		return (
			<div style={styles.main}>
				<div style={styles.innerMain}>
					<Welcome />
				</div>
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
		height: '100vh',
		boxSizing: 'border-box',
		paddingTop: 50
	},
	innerMain: {
		width: '90%',
		margin: '0 auto'
	}
}

Main = connect(
	mapStateToProps
)(Main);

export default Main;
