/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDescription, changeStatus } from '../../actions';
import availableStatus from '../../ultil';

function TodoDetail(props) {
  // eslint-disable-next-line react/prop-types
  const { id } = props.match.params;
  const todoSelected = useSelector((state) => Object.values(state.todos.tasks).find((todo) => todo.id === Number(id)));
  const { text, status, description } = todoSelected;
  const [descriptionText, setDescriptionText] = useState('');
  const dispatch = useDispatch();

  // Add description
  const handleDescriptionChange = (e) => {
    setDescriptionText(e.target.value);
  };

  const handleEnterAddDes = (e) => {
    const trimedText = descriptionText.trim();
    if (e.which === 13 && trimedText) {
      dispatch(addDescription(todoSelected, description, trimedText));
      setDescriptionText('');
    }
  };

  // Change status
  const handleStatusChange = (e) => {
    const statusValue = e.target.value;
    dispatch(changeStatus(todoSelected, statusValue));
  };

  const optionStatus = availableStatus.map((statusOption) => (
    <option key={statusOption} value={statusOption}>
      {statusOption}
    </option>
  ));

  return (
    <div>
      <div className="view">
        <div className="label">
          <div>
            <h1 className="todo-text">
              {text}
            </h1>
          </div>
          <div>
            Add Description:
            {' '}
            <input
              placeholder="Add description"
              value={descriptionText}
              onChange={handleDescriptionChange}
              onKeyDown={handleEnterAddDes}
            />
            <div>
              <span style={{ fontWeight: 'bold' }}>Description: </span>
              {' '}
              {description}
            </div>
          </div>
        </div>
        <div className="options">
          <b>Status: </b>
          <select
            className="status-picker"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="" aria-label="choose" />
            {optionStatus}
          </select>
        </div>
      </div>
    </div>
  );
}

export default TodoDetail;
