export function addTodo(textTitle, textDescription) {
  return {
    type: 'ADD_TODO',
    payload: { title: textTitle, description: textDescription },
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
    payload: { id: todo.id },
  };
}
