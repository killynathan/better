import { connect } from 'react-redux';
import EntryCardList from './components/EntryCardList';
import { toggleActiveEntry } from '../../../../services/actions';

const mapStateToProps = state => {
	console.log(state);
	return {
		entries: state.dashboard.entries
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleClick: id => {
			dispatch(toggleActiveEntry(id));
		}
	}
}

const VisibleEntryCardList = connect(
	mapStateToProps,
	mapDispatchToProps
)(EntryCardList);

export default VisibleEntryCardList;
