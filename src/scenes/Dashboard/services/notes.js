/*
 * action types
 */

export const CHANGE_NOTES = 'CHANGE_NOTES';

/*
 * reducer
 */

const notes = (state = '', action) => {
  switch(action.type) {
    case CHANGE_NOTES:
      return action.text;
    default:
      return state;
  }
};

export default notes;

/*
 * action creators
 */

export const changeNotes = (text) => {
  type: CHANGE_NOTES,
  text
}
