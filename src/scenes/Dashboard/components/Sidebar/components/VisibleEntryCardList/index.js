import { connect } from 'react-redux';
import EntryCardList from './components/EntryCardList';
import { toggleActiveContent } from '../../../../services/activeContent';

const mapStateToProps = state => {
	return {
		entries: state.dashboard.entries
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleClick: id => {
			dispatch(toggleActiveContent(id));
		}
	}
}

const VisibleEntryCardList = connect(
	mapStateToProps,
	mapDispatchToProps
)(EntryCardList);

export default VisibleEntryCardList;