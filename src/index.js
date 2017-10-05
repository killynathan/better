import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import { createStore } from 'redux';
import myApp from './services/reducers';

import {
	addGoal,
	addMilestone
} from './scenes/Dashboard/services/goals';

let store;
let initialState = (JSON.parse(window.localStorage.getItem('liveBetter')));
if (initialState) store = createStore(myApp, initialState);
else store = createStore(myApp);

// store.dispatch(addGoal(0, 'become a software engineer'));
// store.dispatch(addMilestone(0, 0, 'send 25 applications'));
// store.dispatch(addMilestone(0, 1, 'send 50 applications'));
// store.dispatch(addMilestone(0, 2, 'send 75 applications'));
// store.dispatch(addMilestone(0, 3, 'send 100 applications'));
// store.dispatch(addGoal(1, 'stop biting nails'));
// store.dispatch(addMilestone(1, 0, 'clean 1 day'));
// store.dispatch(addMilestone(1, 1, 'clean 2 day'));
// store.dispatch(addMilestone(1, 2, 'clean 3 day'));

ReactDOM.render(
	<Provider store={store}>
  	<App />
	</Provider>,
	document.getElementById('root')
);
