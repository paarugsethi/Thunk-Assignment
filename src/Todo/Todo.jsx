import { useDispatch } from "react-redux";
import {
  addTodosFailure,
  addTodosRequest,
  addTodosSuccess
} from "../redux/app/action";
import { addTodos, getTodos } from "./api";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Todo() {
  const dispatch = useDispatch();

  const handleAdd = (text) => {
    dispatch(addTodos(text)).then((res) => {
      dispatch(getTodos());
    });
  };

  return (
    <div>
      <TodoInput onAdd={handleAdd} />
      <TodoList />
    </div>
  );
}
