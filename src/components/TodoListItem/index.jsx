/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ListGroup, Button,
} from 'react-bootstrap';
import {
  deleteTodo,
} from '../../actions';

// eslint-disable-next-line max-len
const selectTodoById = (state, todoId) => Object.values(state.todos.tasks).find((todo) => todo.id === todoId);

function TodoListItem({ id }) {
  const task = useSelector((state) => selectTodoById(state, id));

  const { text, description } = task;
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(task));
  };

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
          <p>
            Description:
            {' '}
            {description}
          </p>
          <Button className="button-delete" onClick={handleDeleteTodo} variant="danger">Delete Item</Button>
        </div>
      </div>
    </ListGroup.Item>
  );
}

export default TodoListItem;
