import { getStatusName, STATUSES } from '../config';

/* eslint-disable object-shorthand */
const initialState = {
  tasks: {},
};

function nextTaskId(tasks) {
  return Object.values(tasks).length;
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const id = nextTaskId(state.tasks);
      const { title, description } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [id]: {
            id,
            text: title,
            description: description,
            status: getStatusName(STATUSES.CREATED),
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
      const { [action.payload.id]: taskWillBeDelete, ...tasks } = state.tasks;
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
