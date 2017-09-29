import { combineReducers } from 'redux';

import entries from './entries';
import activeContent from './activeContent';
import goals from './goals';

const dashboard = combineReducers({
	goals,
	entries,
	activeContent
});

export default dashboard;
