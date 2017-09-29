/*
 * action types
 */

export const ADD_ENTRY = 'ADD_ENTRY';
export const TOGGLE_ACTIVE_ENTRY = 'TOGGLE_ACTIVE_ENTRY';

/*
 * reducers
 */

export default sidebar = (state, action) => {
  
}

/*
 * action creators
 */

export const addEntry = (date = '', todos = [], notes = 'placeholder') => {
	return {
		type: ADD_ENTRY,
		todos,
		date,
		notes
	}
}

export const toggleActiveEntry = (id) => {
	return {
		type: TOGGLE_ACTIVE_ENTRY,
		id
	}
}
