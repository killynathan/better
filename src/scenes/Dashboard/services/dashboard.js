import { combineReducers } from 'redux';

import entries from './entries';
import activeContent from './activeContent';
import goals from './goals/index.js';

const dashboard = combineReducers({
	goals,
	entries,
	activeContent
});

export default dashboard;
