import React from 'react';
import { darkestGreyishBlue } from 'constants/colors';

const Todo = ({ index, todo, onCheckboxClick, onDeleteClick }) => {
  return (
    <div
      data-id={index}
      style={styles.todo}
    >
      {todo.completed ?
        <i className='mdi mdi-checkbox-marked-outline' style={styles.todoCheckbox} onClick={() => onCheckboxClick()}/> :
        <i className='mdi mdi-checkbox-blank-outline' style={styles.todoCheckbox} onClick={() => onCheckboxClick()}/>}
      <p style={styles.todoText}>{todo.text}</p>
      <i className="mdi mdi-close" style={styles.todoX} onClick={() => onDeleteClick()}/>
    </div>
  )
}

const styles = {
	todo: {
		paddingBottom: 10,
    paddingTop: 10,
    borderBottom: '1px solid ' + darkestGreyishBlue,
    cursor: 'grab',
    cursor: '-webkit-grab'
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

export default Todo;
