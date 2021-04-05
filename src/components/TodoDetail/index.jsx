/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ListGroup,
  InputGroup,
  FormControl,
  Form,
  Jumbotron,
  Container,
} from 'react-bootstrap';
import { addDescription, changeStatus } from '../../actions';
import { STATUSES, getStatusName } from '../../config';
import detailTaskSelector from '../../selectors';

function TodoDetail(props) {
  // eslint-disable-next-line react/prop-types
  const { id } = props.match.params;

  const todoSelected = useSelector(detailTaskSelector(id));
  const { text, status, description } = todoSelected;
  const [descriptionText, setDescriptionText] = useState('');
  const dispatch = useDispatch();

  // Add description
  const handleDescriptionChange = (event) => {
    setDescriptionText(event.target.value);
  };

  const handleEnterAddDes = (event) => {
    const trimedText = descriptionText.trim();
    if (event.code === 'Enter' && trimedText) {
      dispatch(addDescription(todoSelected, description, trimedText));
      setDescriptionText('');
    }
  };

  // Change status
  const handleStatusChange = (event) => {
    const statusValue = event.target.value;
    dispatch(changeStatus(todoSelected, statusValue));
  };

  const optionStatus = Object.values(STATUSES).map((statusOption) => (
    <option key={statusOption} value={getStatusName(statusOption)}>
      {getStatusName(statusOption)}
    </option>
  ));

  return (
    <ListGroup.Item>
      <div className="view">
        <div className="label">
          <h1 className="todo-text">{text}</h1>
          <div className="description">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <span className="mr-2 font-weight-bold">
                    Change description :
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
                  <p>{description}</p>
                </Container>
              </Jumbotron>
            </div>
          </div>
        </div>
        <div className="options">
          <Form.Group controlId="exampleForm.SelectCustomSizeLg">
            <Form.Label>
              <b>Status:</b>
            </Form.Label>
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
