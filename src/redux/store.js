import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import appReducer from "./app/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({ auth: authReducer, app: appReducer });

// const networkRequests = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     const func = action;
//     return func(store.dispatch, store.getState);
//   } else {
//     next(action);
//   }
// };

// const loggerMiddleware = (store) => (next) => (action) => {
//   console.log("dispatching action in 1", action);
//   console.log(store.getState());
//   const value = next(action);
//   console.log(value);
//   console.log(store.getState());
//   console.log("ending 1");
// };

// const loggerMiddleware2 = (store) => (next) => (action) => {
//   console.log("dispatching action in 2", action);
//   console.log(store.getState());
//   const value = next(action);
//   console.log(value);
//   console.log(store.getState());
//   console.log("ending 2");
// };

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

export const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store.getState());
