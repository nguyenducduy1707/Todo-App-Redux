import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import TodoListItem from '../TodoListItem';
import InputHeader from '../InputHeader';

const selectTodoIds = (state) => Object.values(state.todos.tasks).map((todo) => todo);

function TodoList() {
  const todoIds = useSelector(selectTodoIds, shallowEqual);
  return (
    <div>
      <div className="input-header">
        <InputHeader />
      </div>
      <ListGroup>
        {todoIds.map((todoId) => (
          <TodoListItem key={todoId.id} id={todoId.id} />
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;
