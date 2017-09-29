import React from 'react';
import { greyishBlue, offWhite, grey, darkestGreyishBlue, darkGreyishBlue, blue } from 'constants/colors';

const Todos = ({todos, onCheckboxClick, onDeleteClick, onAddTodoClick}) => {
  let input;

  return (
    <div style={styles.todos}>
      <p
        style={styles.title}>
        Todos
      </p>

      <form
        onSubmit={e => {
          e.preventDefault();
          onAddTodoClick(input.value);
          input.value = '';
        }}
      >
        <input
          ref={element => {
            input = element
          }}
          style={styles.input}
          placeholder='new todo'
        />
        <button
          type='submit'
          style={styles.addButton}
        >
          <i className='mdi mdi-plus'/>
        </button>
      </form>

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
    marginTop: 30
  },
  title: {
    fontSize: 20,
    color: offWhite,
    marginBottom: 10
  },
  input: {
    backgroundColor: darkGreyishBlue,
    border: '1px solid ' + darkestGreyishBlue,
    outline: 'none',
    padding: 5,
    fontSize: 17,
    fontFamily: 'inherit',
    color: 'inherit',
    marginRight: 10
  },
  addButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: blue,
    fontSize: 20,
    cursor: 'pointer'
  },
  list: {
		listStyleType: 'none',
		marginTop: 10,
		fontSize: 17
	},
	todoWrapper: {
		display: 'inline-block'
	},
	todo: {
		marginTop: 3
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
    cursor: 'pointer'
  }
};

export default Todos;
