import { useSelector } from "react-redux";
import "./styles.css";
import Todo from "./Todo/Todo";
import Login from "./Login/Login";

export default function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);

  return isAuth ? (
    <div className="App">
      <h3>Token is: {token}</h3>
      <h1>TODO</h1>
      <Todo />
    </div>
  ) : (
    <Login />
  );
}
