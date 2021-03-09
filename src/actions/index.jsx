export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: text,
  };
}

export function addDescription(todo, description, text) {
  return {
    type: 'ADD_DESCRIPTION',
    payload: { todoId: todo.id, description: text },
  };
}

export function changeStatus(todo, status) {
  return {
    type: 'CHANGE_STATUS',
    payload: { todoId: todo.id, status },
  };
}

export function deleteTodo(todo) {
  return {
    type: 'DELETE_TODO',
    payload: todo.id,
  };
}
