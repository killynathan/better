import { connect } from 'react-redux';
import Entry from './components/Entry';

const getActiveEntryFromId = (entries, id) => {
	if (id === -1) return -1; // none active. show welcome page!
	return entries[id];
}

const mapStateToProps = state => {
	return {
		content: getActiveEntryFromId(state.dashboard.entries, state.dashboard.activeEntryId)
	}
}

const Main = connect(
	mapStateToProps
)(Entry);

export default Main;
