import React, { Component } from 'react';
import { greyishBlue, offWhite, grey, darkestGreyishBlue, darkGreyishBlue, blue } from 'constants/colors';
import SelfContainedInput from 'components/SelfContainedInput';
import Todo from './Todo';

const Todos = ({ onAddTodoClick, onCheckboxClick, onDeleteClick, onMoveTodo, todos }) => {

  let dragged = -1;
  let over = -1

  const handleDragStart = (e) => {
    dragged = e.target;
    e.dataTransfer.setData('text/plain', e.target);
  }

  const handleDragOver = (e) => {
    over = e.target;
  }

  const handleDragEnd = (e) => {
    let from = Number(dragged.dataset.id);
    let to = Number(over.dataset.id);
    onMoveTodo(from, to);
  }


  return (

    <div style={styles.todos}>

      <SelfContainedInput
        onEnter = {onAddTodoClick}
        style = {styles.input}
        placeholder = 'new todo'
      />

      <ul
        style={styles.list}>
        {todos.map((todo, i) =>
          <li
            key={i}
            data-id={i}
            draggable='true'
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
          >
            <Todo
              index={i}
              todo={todo}
              onCheckboxClick={()=>onCheckboxClick(i)}
              onDeleteClick={()=>onDeleteClick(i)}
            />
          </li>)}
      </ul>
    </div>
  )

};

const styles = {
  todos: {
    paddingBottom: 30
  },
  title: {
    fontSize: 20,
    color: offWhite,
    marginBottom: 10
  },
  input: {
    backgroundColor: darkGreyishBlue,
    border: '1px solid ' + darkestGreyishBlue,
    borderRadius: 5,
    fontSize: 17,
    marginBottom: 20
  },
  addButton: {
    backgroundColor: 'transparent',
    color: blue,
    fontSize: 20,
    cursor: 'pointer'
  },
  list: {
		listStyleType: 'none',
		fontSize: 17
	}
};

export default Todos;
