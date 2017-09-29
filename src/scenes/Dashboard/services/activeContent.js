/*
 * action types
 */

export const TOGGLE_ACTIVE_CONTENT = 'TOGGLE_ACTIVE_CONTENT';

/*
 * reducer
 */

const activeContent = (state = -1, action) => {
	switch(action.type) {
		case TOGGLE_ACTIVE_CONTENT:
			return action.id;
		default:
			return state;
	}
};

/*
 * action creators
 */

export const toggleActiveContent = (id) => {
 	return {
 		type: TOGGLE_ACTIVE_CONTENT,
 		id
 	}
};

export default activeContent;
