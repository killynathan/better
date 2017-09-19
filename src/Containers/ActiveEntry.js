import { connect } from 'react-redux';
import Entry from '../Components/Entry';

const getActiveEntryFromId = (entries, id) => {
	if (id === -1) return -1; // none active. show welcome page
	return entries[id];
}

const mapStateToProps = state => {
	return {
		entry: getActiveEntryFromId(state.entries, state.activeEntryId)
	}
}

const ActiveEntry = connect(
	mapStateToProps
)(Entry);

export default ActiveEntry;