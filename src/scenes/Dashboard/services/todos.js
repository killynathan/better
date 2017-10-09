/*
 * action types
 */

 export const TOGGLE_TODO = 'TOGGLE_TODO';
 export const ADD_TODO = 'ADD_TODO';
 export const DELETE_TODO = 'DELETE_TODO';
 export const MOVE_TODO = 'MOVE_TODO';

/*
 * reducer
 */

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, i) => {
        if (i === action.todoIndex) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    case DELETE_TODO:
      return [
        ...state.slice(0, action.todoIndex),
        ...state.slice(action.todoIndex + 1)
      ];
    case MOVE_TODO:
      let to = action.to;
      let from = action.from;
      let fromElement = state[from];
      let temp = [
        ...state.slice(0, to),
        fromElement,
        ...state.slice(to),
      ];
      if (from > to) from++;
      return [
        ...temp.slice(0, from),
        ...temp.slice(from + 1)
      ];
    default:
      return state;
  }
};

export default todos;

/*
 * action creators
 */
