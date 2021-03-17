/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ListGroup, InputGroup, FormControl, Form, Jumbotron, Container,
} from 'react-bootstrap';
import { addDescription, changeStatus } from '../../actions';
import availableStatus from '../../ultil';

function TodoDetail(props) {
  // eslint-disable-next-line react/prop-types
  const { id } = props.match.params;

  const detailTaskSelector = (state) => state?.todos?.tasks[id || ''] ?? {};

  const todoSelected = useSelector(detailTaskSelector);
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
    <ListGroup.Item>
      <div className="view">
        <div className="label">
          <h1 className="todo-text">
            {text}
          </h1>
          <div className="description">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <span className="mr-2 font-weight-bold">
                    Description :
                  </span>
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
            <div className="description-text">
              <Jumbotron fluid>
                <Container>
                  <p>
                    {description}
                  </p>
                </Container>
              </Jumbotron>
            </div>
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
        </div>
      </div>
    </ListGroup.Item>
  );
}

export default TodoDetail;