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

export const addGoal = (id = Math.floor(Math.random() * 100000), text) => ({
 		type: ADD_GOAL,
 		text,
    id
 });

export const addMilestone = (goalId, milestoneId, text) => ({
  type: ADD_MILESTONE,
  goalId,
  text,
  milestoneId
});

export default goals;
