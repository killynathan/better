/*
 * action types
 */

export const ADD_GOAL = 'ADD_GOAL';

/*
 * reducer
 */

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

/*
 * action creators
 */

export const addGoal = (goal) => {
 	return {
 		type: ADD_GOAL,
 		text: goal
 	}
};

export default goals;
