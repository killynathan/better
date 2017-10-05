import React from 'react';
import { greyishBlue, offWhite, grey, darkestGreyishBlue, darkGreyishBlue, blue } from 'constants/colors';
import SelfContainedInput from 'components/SelfContainedInput';

const Todos = ({todos, onCheckboxClick, onDeleteClick, onAddTodoClick}) => {
  let input;

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
            style={styles.todo}>
            <div
              style={styles.todoWrapper}>
              {todo.completed ?
                <i className='mdi mdi-checkbox-marked-outline' style={styles.todoCheckbox} onClick={() => onCheckboxClick(i)}/> :
                <i className='mdi mdi-checkbox-blank-outline' style={styles.todoCheckbox} onClick={() => onCheckboxClick(i)}/>}
              <p style={styles.todoText}>{todo.text}</p>
              <i className="mdi mdi-close" style={styles.todoX} onClick={() => onDeleteClick(i)}/>
            </div>
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
	},
	todoWrapper: {
		//display: 'inline-block'
	},
	todo: {
		paddingBottom: 10,
    paddingTop: 10,
    borderBottom: '1px solid ' + darkestGreyishBlue
	},
	todoCheckbox: {
		display: 'inline-block',
		marginRight: 5,
    cursor: 'pointer'
	},
	todoText: {
		display: 'inline-block',
    marginRight: 5
	},
  todoX: {
    color: '#c16266',
    cursor: 'pointer',
    float: 'right'
  }
};

export default Todos;
