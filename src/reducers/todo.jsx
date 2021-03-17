const initialState = {
  tasks: {},
};

function nextTaskId(tasks) {
<<<<<<< HEAD
  return `task_${Object.values(tasks).length}`;
=======
  return Object.values(tasks).length + 1;
>>>>>>> f084e48f5413f4ab17e8364bd0027647e4b1c1ab
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const id = nextTaskId(state.tasks);
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [id]: {
            id,
            text: action.payload,
            status: 'Not done yet',
            description: '',
          },
        },
      };
    }
    case 'ADD_DESCRIPTION': {
      const { todoId, description } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [todoId]: {
            ...state.tasks[todoId] ?? {},
            description: description ?? '',
          },
        },
      };
    }
    case 'CHANGE_STATUS': {
      const { status, todoId } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [todoId]: {
            ...state.tasks[todoId] ?? {},
            status,
          },
        },
      };
    }
    case 'DELETE_TODO': {
      const { [action.payload]: taskWillBeDelete, ...tasks } = state.tasks;
      return {
        ...state,
        tasks: {
          ...tasks,
        },
      };
    }
    default:
      return state;
  }
}
