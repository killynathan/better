import { combineReducers } from 'redux';

import dashboard from '../scenes/Dashboard/services/reducers';

const myApp = combineReducers({
  dashboard
});

export default myApp;
