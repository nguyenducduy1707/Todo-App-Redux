/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ListGroup, InputGroup, FormControl, Button, Form,
} from 'react-bootstrap';
import {
  changeStatus, deleteTodo, addDescription,
} from '../../actions';
import availableStatus from '../../ultil';

// eslint-disable-next-line max-len
const selectTodoById = (state, todoId) => Object.values(state.todos.tasks).find((todo) => todo.id === todoId);

function TodoListItem({ id }) {
  const todo = useSelector((state) => selectTodoById(state, id));

  const { text, status, description } = todo;
  const [descriptionText, setDescriptionText] = useState('');
  const dispatch = useDispatch();

  // Add description
  const handleDescriptionChange = (e) => {
    setDescriptionText(e.target.value);
  };

  const handleEnterAddDes = (e) => {
    const trimedText = descriptionText.trim();
    if (e.which === 13 && trimedText) {
      dispatch(addDescription(todo, description, trimedText));
      setDescriptionText('');
    }
  };

  // Delete description
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo));
  };

  // Change status
  const handleStatusChange = (e) => {
    const statusValue = e.target.value;
    dispatch(changeStatus(todo, statusValue));
  };

  const optionStatus = availableStatus.map((statusOption) => (
    <option key={statusOption} value={statusOption}>
      {statusOption}
    </option>
  ));

  // Transfer data onClick

  return (
    <ListGroup.Item>
      <div className="view">
        <div className="label">
          <h1 className="todo-text">
            <Link
              to={`/${id}`}
            >
              {text}
            </Link>
          </h1>
          <div className="description">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <span className="mr-2 font-weight-bold">
                    Description :
                  </span>
                  {description}
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={descriptionText}
                onChange={handleDescriptionChange}
                onKeyDown={handleEnterAddDes}
              />
            </InputGroup>
          </div>
        </div>
        <div className="options">
          <Form.Group controlId="exampleForm.SelectCustomSizeLg">
            <Form.Label><b>Status:</b></Form.Label>
            <Form.Control
              as="select"
              className="status-picker"
              value={status}
              onChange={handleStatusChange}
              size="lg"
              custom
            >
              {optionStatus}
            </Form.Control>
          </Form.Group>
          <Button variant="danger" className="destroy" onClick={handleDeleteTodo}>
            Delete Item
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
}

export default TodoListItem;
