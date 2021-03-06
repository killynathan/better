/*
 * action types
 */

const ADD_GOAL = 'ADD_GOAL';
import { ADD_MILESTONE, DELETE_MILESTONE, TOGGLE_MILESTONE } from './milestones';

/*
 * reducer
 */

import milestones from './milestones';

const goals = (state = [], action) => {
 	switch(action.type) {
 		case ADD_GOAL:
 			return [
 				...state,
 				{
          id: action.id,
 					text: action.text,
          milestones: [],
          completed: false,
 				}
 			];
    case ADD_MILESTONE:
    case DELETE_MILESTONE:
    case TOGGLE_MILESTONE:
      console.log(action);
      return state.map(goal => {
        if (goal.id === action.goalId) {
          return Object.assign({}, goal, {
            milestones: milestones(goal.milestones, action)
          });
        }
        return goal;
      })
 		default:
 			return state;
 	}
 };

/*
 * action creators
 */

export const addGoal = (text, id = Math.floor(Math.random() * 100000)) => ({
 		type: ADD_GOAL,
 		text,
    id
 });

export const addMilestone = (goalId, text, milestoneId = Math.floor(Math.random() * 100000)) => ({
  type: ADD_MILESTONE,
  goalId,
  text,
  milestoneId
});

export default goals;
