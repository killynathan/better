/*
 * action types
 */

export const CHANGE_TITLE = 'CHANGE_TITLE';

/*
 * reducer
 */

const title = (state = '', action) => {
  switch(action.type) {
    case CHANGE_TITLE:
      return action.text;
    default:
      return state;
  }
};

export default title;

/*
 * action creators
 */

 export const changeTitle = (entryId, text) => {

 };
