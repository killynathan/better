import { combineReducers } from 'redux';
import {
	ADD_GOAL,
	ADD_ENTRY,
	TOGGLE_ACTIVE_ENTRY
} from './actions';

const goals = (state = [], action) => {
	switch(action.type) {
		case ADD_GOAL:
			return [
				...state,
				{
					goal: action.text
				}
			];
		default:
			return state;
	}
};

const entries = (state = [], action) => {
	switch(action.type) {
		case ADD_ENTRY:
			return [
				{
					date: action.date,
					todos: action.todos,
					notes: action.notes
				},
				...state
			];
		default:
			return state;
	}
};

const activeEntryId = (state = -1, action) => {
	switch(action.type) {
		case TOGGLE_ACTIVE_ENTRY:
			return action.id;
		default:
			return state;
	}
}

const dashboard = combineReducers({
	goals,
	entries,
	activeEntryId
});


export default dashboard;
