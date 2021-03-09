const initialState = {
  tasks: {},
};

function nextTasksId(tasks) {
  return Object.values(tasks).length;
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const id = nextTasksId(state.tasks);

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [id]: {
            id,
            text: action.payload,
            status: 'Not done yet',
            description: ' ',
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
      const { todoId, status } = action.payload;

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
      const { [action.payload]: taskWillBeDelete, ...rest } = state.tasks;

      return {
        ...rest,
      };
    }

    default:
      return state;
  }
}
