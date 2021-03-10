import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions';

function InputHeader() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  const capitalizeFirstLetter = (string) => (
    string.charAt(0).toUpperCase() + string.slice(1)
  );
  const handleEnterKey = (e) => {
    const trimedText = text.trim();

    if (e.which === 13 && trimedText) {
      dispatch(addTodo(capitalizeFirstLetter(trimedText)));
      setText('');
    }
  };

  return (
    <header>
      <input
        className="new-todo"
        placeholder="What needs to be done ? "
        value={text}
        onChange={handleChange}
        onKeyDown={handleEnterKey}
      />
    </header>
  );
}

export default InputHeader;
