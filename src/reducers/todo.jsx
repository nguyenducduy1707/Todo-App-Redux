const initialState = [];

function nextTodoid(todos) {
  const maxIdTodos = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxIdTodos + 1;
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          id: nextTodoid(state),
          text: action.payload,
          status: 'Not done yet',
          description: ' ',
        },
      ];
    }
    case 'ADD_DESCRIPTION': {
      const { todoId, description } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          description,
        };
      });
    }
    case 'CHANGE_STATUS': {
      const { todoId, status } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          status,
        };
      });
    }
    case 'DELETE_TODO': {
      return state.filter((todo) => todo.id !== action.payload);
    }
    default:
      return state;
  }
}
