import React from 'react';
import { greyishBlue, offWhite, grey, darkestGreyishBlue, darkGreyishBlue, blue } from 'constants/colors';

const Todos = ({todos, onCheckboxClick, onDeleteClick, onAddTodoClick}) => {
  let input;

  return (
    <div style={styles.todos}>
      {/*}<p
        style={styles.title}>
        Todos
      </p>*/}

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
        {/*<button
          type='submit'
          style={styles.addButton}
        >
          <i className='mdi mdi-plus'/>
        </button>*/}
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
    paddingBottom: 30
  },
  title: {
    fontSize: 20,
    color: offWhite,
    marginBottom: 10
  },
  input: {
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: darkGreyishBlue,
    border: '1px solid ' + darkestGreyishBlue,
    borderRadius: 5,
    outline: 'none',
    padding: 8,
    fontSize: 17,
    fontFamily: 'inherit',
    color: 'inherit',
    marginRight: 10,
    marginBottom: 20
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
