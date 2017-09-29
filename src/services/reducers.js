import { combineReducers } from 'redux';

import dashboard from '../scenes/Dashboard/services/dashboard';

const myApp = combineReducers({
  dashboard
});

export default myApp;
