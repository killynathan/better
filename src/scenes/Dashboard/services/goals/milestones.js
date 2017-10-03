/*
 * action types
 */

export const ADD_MILESTONE = 'ADD_MILESTONE';
export const DELETE_MILESTONE = 'DELETE_MILESTONE';
export const TOGGLE_MILESTONE = 'TOGGLE_MILESTONE';

/*
 * reduers
 */

const milestones = (state = [], action) => {
  switch(action.type) {
    case ADD_MILESTONE:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          dateCreated: action.date,
          notes: ''
        }
      ];
    case DELETE_MILESTONE:
      return state.filter(milestone => milestone.id !== action.milestoneId);
    case TOGGLE_MILESTONE:
      return state.map(milestone => {
        if (milestone.id === action.id) {
          return Object.assign({}, milestone, {
            completed: !milestone.completed
          });
        }
        return milestone;
      });
    default:
      return state;
  }
};

export default milestones;
