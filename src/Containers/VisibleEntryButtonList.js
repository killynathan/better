import { connect } from 'react-redux';
import EntryButtonList from '../Components/EntryButtonList';
import { toggleActiveEntry } from '../Redux/actions';

const mapStateToProps = state => {
	return {
		entries: state.entries
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleClick: id => {
			dispatch(toggleActiveEntry(id));
		}
	} 
}

const VisibleEntryButtonList = connect(
	mapStateToProps,
	mapDispatchToProps
)(EntryButtonList);

export default VisibleEntryButtonList;
