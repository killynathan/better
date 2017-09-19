import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './Components/App';

import { createStore } from 'redux';
import myApp from './Redux/reducers';

import {
	addGoal,
	addEntry
} from './Redux/actions';

let store = createStore(myApp); // MAY WANT TO INIT WITH STATE FROM SERVER!!!!!!!!

console.log(store.getState());

let unsubscribe = store.subscribe(() => 
	console.log(store.getState())
);

store.dispatch(addGoal('it worked?~~'));
store.dispatch(addEntry((new Date()).toDateString(), ['clean room', 'finish HW', 'gym']));
store.dispatch(addEntry('Tue Sep 19 2017', ['clean room', 'finish HW', 'gym']));
store.dispatch(addEntry('Wed Sep 20 2017', ['go to the park', 'email boss', 'gym']));
store.dispatch(addEntry('Thu Sep 21 2017', ['clean room', 'wash clothes', 'gym']));

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  	document.getElementById('root')
);
