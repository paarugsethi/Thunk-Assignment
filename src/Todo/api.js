import {
  addTodosFailure,
  addTodosRequest,
  addTodosSuccess,
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess
} from "../redux/app/action";

export const getTodos = () => (dispatch) => {
  // PRE FETCH
  const requestAction = getTodosRequest();
  dispatch(requestAction);

  return (
    fetch("https://herokumock.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((res) => {
        // SUCCESS
        console.log(res);
        const successAction = getTodosSuccess(res);
        dispatch(successAction);
      })
      // FAILURE
      .catch((res) => {
        const failureAction = getTodosFailure();
        dispatch(failureAction);
      })
  );
};

export const addTodos = (text) => (dispatch) => {
  // PRE FETCH
  const requestAction = addTodosRequest();
  dispatch(requestAction);

  return (
    fetch("https://herokumock.herokuapp.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: text,
        status: false
      })
    })
      .then((res) => res.json())
      .then((res) => {
        // SUCCESS
        console.log(res);
        const successAction = addTodosSuccess(res);
        dispatch(successAction);
      })
      // FAILURE
      .catch((res) => {
        const failureAction = addTodosFailure();
        dispatch(failureAction);
      })
  );
};
