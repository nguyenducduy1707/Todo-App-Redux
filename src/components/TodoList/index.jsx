import React, { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { ListGroup, Button, Modal } from 'react-bootstrap';
import TodoListItem from '../TodoListItem';
import { addTodo } from '../../actions';

const selectTodoIds = (state) => Object.values(state.todos.tasks).map((todo) => todo);

function TodoList() {
  const [show, setShow] = useState(false);
  const [textTitle, setTextTitle] = useState('');
  const [textDescription, setTextDescription] = useState('');

  const todoIds = useSelector(selectTodoIds, shallowEqual);
  const dispatch = useDispatch();

  const handleChangeTitle = (event) => setTextTitle(event.target.value);
  const handleChangeDescription = (event) => setTextDescription(event.target.value);

  const handleAddTask = () => {
    const trimedTextTitle = textTitle.trim();
    const trimedTextDescription = textDescription.trim();
    if (trimedTextTitle !== '') {
      dispatch(addTodo(trimedTextTitle, trimedTextDescription));
      setTextTitle('');
      setTextDescription('');
    }
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="success" size="lg" className="button-add" onClick={handleShow}>Add new task</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="button-add">Add new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-header">
            <input
              className="new-todo"
              placeholder="What needs to be done ? "
              value={textTitle}
              onChange={handleChangeTitle}
            />
            <hr />
            <input
              className="new-todo"
              placeholder="Some description ? "
              value={textDescription}
              onChange={handleChangeDescription}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddTask}>Complete</Button>
        </Modal.Footer>
      </Modal>

      <ListGroup>
        {todoIds.map((todoId) => (
          <TodoListItem key={todoId.id} id={todoId.id} />
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;
