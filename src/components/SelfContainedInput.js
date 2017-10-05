import React from 'react';

const SelfContainedInput = ({ style, onEnter, placeholder }) => {
  let input;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onEnter(input.value);
        input.value = '';
      }}
    >
      <input
        ref={element => {
          input = element
        }}
        style={{...styles.input, ...style}}
        placeholder={placeholder}
      />
    </form>
  )
};

const styles = {
  input: {
    boxSizing: 'border-box',
    width: '100%',
    fontFamily: 'inherit',
    color: 'inherit',
    backgroundColor: 'inherit',
    outline: 'none',
    border: 'none',
    padding: 8,
  }
}

export default SelfContainedInput;
