import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './Components/App';

import { createStore } from 'redux';
import myApp from './services/reducers';

import {
	addEntry,
	addTodo,
	toggleTodo,
	changeTitle,
	changeNotes,
	deleteTodo
} from './scenes/Dashboard/services/entries';

let store;
let initialState = (JSON.parse(window.localStorage.getItem('liveBetter')));
console.log(initialState);
if (initialState) store = createStore(myApp, initialState);
else store = createStore(myApp);

ReactDOM.render(
	<Provider store={store}>
  	<App />
	</Provider>,
	document.getElementById('root')
);
