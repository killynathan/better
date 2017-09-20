/*
 * action types
 */

export const ADD_GOAL = 'ADD_GOAL';
export const ADD_ENTRY = 'ADD_ENTRY';
export const TOGGLE_ACTIVE_ENTRY = 'TOGGLE_ACTIVE_ENTRY';

/*
 * action creators
 */

export const addGoal = (goal) => {
	return {
		type: ADD_GOAL,
		text: goal
	}
}

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
