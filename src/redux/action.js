// // CONSTANTS
// export const actionConstants = {
//   ADD_TODO: "ADD_TODO",

//   REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",

//   TOGGLE_TODO_STATUS: "TOGGLE_TODO_STATUS",

//   GET_TODO_REQUEST: "GET_TODO_REQUEST",
//   GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
//   GET_TODO_FAILURE: "GET_TODO_FAILURE",

//   // REQUEST
//   LOGIN_SUCCESS: "LOGIN_SUCCESS"
//   // FAILURE
// };

// // ACTION CREATORS
// export const loginSuccess = (token) => {
//   return {
//     type: actionConstants.LOGIN_SUCCESS,
//     payload: {
//       token: token
//     }
//   };
// };

// export const getTodosRequest = () => {
//   return {
//     type: actionConstants.GET_TODO_REQUEST,
//     payload: {
//       isLoading: true
//     }
//   };
// };

// export const getTodosSuccess = (todos) => {
//   return {
//     type: actionConstants.GET_TODO_SUCCESS,
//     payload: {
//       todos: todos,
//       isLoading: false
//     }
//   };
// };

// export const getTodosFailure = () => {
//   return {
//     type: actionConstants.GET_TODO_FAILURE,
//     payload: {
//       isError: true
//     }
//   };
// };

// export const addTodo = ({ title, status, id }) => {
//   return {
//     type: actionConstants.ADD_TODO,
//     // type: actionConstants.GET_TODO_REQUEST,
//     payload: {
//       // isLoading: true
//       title,
//       status,
//       id
//     }
//   };
// };

// export const removeTodo = (id) => ({
//   type: actionConstants.REMOVE_TODO_ITEM,
//   payload: {
//     id: id
//   }
// });

// export const toggleTodo = (id) => ({
//   type: actionConstants.TOGGLE_TODO_STATUS,
//   payload: {
//     id: id
//   }
// });
