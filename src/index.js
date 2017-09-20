import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './Components/App';

import { createStore } from 'redux';
import myApp from './services/reducers';

import {
	addGoal,
	addEntry
} from './scenes/Dashboard/services/actions';

let store = createStore(myApp); // MAY WANT TO INIT WITH STATE FROM SERVER!!!!!!!!

store.dispatch(addGoal('it worked?~~'));
store.dispatch(addEntry((new Date()).toDateString(), ['clean room', 'finish HW', 'gym'], 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));
store.dispatch(addEntry('Tue Sep 19 2017', ['clean room', 'finish HW', 'gym']));
store.dispatch(addEntry('Wed Sep 20 2017', ['go to the park', 'email boss', 'gym']));
store.dispatch(addEntry('Thu Sep 21 2017', ['clean room', 'wash clothes', 'gym']));

ReactDOM.render(
	<Provider store={store}>
  	<App />
	</Provider>,
	document.getElementById('root')
);
