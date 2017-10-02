/*
 * action types
 */

const ADD_ENTRY = 'ADD_ENTRY';
const DELETE_ENTRY = 'DELETE_ENTRY';
import { CHANGE_TITLE } from './title';
import { TOGGLE_TODO, ADD_TODO, DELETE_TODO } from './todos';
import { CHANGE_NOTES } from './notes';

/*
 * reducers
 */

import todos from './todos';
import title from './title';
import notes from './notes';

const entries = (state = [], action) => {
  switch(action.type) {
 		case ADD_ENTRY:
 			return [
 				{
          title: action.date,
 					todos: action.todos,
 					notes: action.notes,
 					date: action.date,
          id: action.id
 				},
 				...state
 			];
    case DELETE_ENTRY:
      console.log(state.filter(entry => entry.id !== action.id));
      return state.filter(entry => entry.id !== action.id);
    case ADD_TODO:
    case TOGGLE_TODO:
    case DELETE_TODO:
    case CHANGE_TITLE:
    case CHANGE_NOTES:
      return state.map((entry) => {
        if (entry.id === action.entryId) {
          return Object.assign({}, entry, {
            todos: todos(entry.todos, action),
            title: title(entry.title, action),
            notes: notes(entry.notes, action)
          });
        }
        return entry;
      });
 		default:
 			return state;
 	}
};

/*
 * action creators
 */

export const addEntry = (date = '', todos = [], notes = 'placeholder', id = Math.floor(Math.random() * 100000)) => {
	return {
		type: ADD_ENTRY,
		todos,
		date,
		notes,
    id
	};
};

export const deleteEntry = (id) => {
  return {
    type: DELETE_ENTRY,
    id
  };
}

export const toggleTodo = (entryId, todoIndex) => {
  return {
    type: TOGGLE_TODO,
    entryId,
    todoIndex
  };
};

export const addTodo = (entryId, text) => {
  return {
    type: ADD_TODO,
    entryId,
    text
  };
};

export const changeTitle = (entryId, text) => {
  return {
      type: CHANGE_TITLE,
      entryId,
      text
  };
};

export const changeNotes = (entryId, text) => ({
  type: CHANGE_NOTES,
  entryId,
  text
});

export const deleteTodo = (entryId, todoIndex) => ({
  type: DELETE_TODO,
  entryId,
  todoIndex
})

export default entries;
