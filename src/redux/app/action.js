import { appConstants } from "./actionTypes";

export const getTodosRequest = () => {
  return {
    type: appConstants.GET_TODO_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const getTodosSuccess = (todos) => {
  return {
    type: appConstants.GET_TODO_SUCCESS,
    payload: {
      todos: todos,
      isLoading: false
    }
  };
};

export const getTodosFailure = () => {
  return {
    type: appConstants.GET_TODO_FAILURE,
    payload: {
      isError: true
    }
  };
};

export const addTodosRequest = () => {
  return {
    type: appConstants.ADD_TODO_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const addTodosSuccess = (todos) => {
  return {
    type: appConstants.ADD_TODO_SUCCESS,
    payload: {
      todos: todos,
      isLoading: false
    }
  };
};

export const addTodosFailure = () => {
  return {
    type: appConstants.ADD_TODO_FAILURE,
    payload: {
      isError: true
    }
  };
};

export const addTodo = ({ title, status, id }) => {
  return {
    type: appConstants.ADD_TODO,
    // type: appConstants.GET_TODO_REQUEST,
    payload: {
      // isLoading: true
      title,
      status,
      id
    }
  };
};

export const removeTodo = (id) => ({
  type: appConstants.REMOVE_TODO_ITEM,
  payload: {
    id: id
  }
});

export const toggleTodo = (id) => ({
  type: appConstants.TOGGLE_TODO_STATUS,
  payload: {
    id: id
  }
});
