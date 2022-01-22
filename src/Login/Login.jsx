import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/auth/action";

export default function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const action = loginSuccess(Date.now());
    dispatch(action);
  };

  return (
    <div>
      <h3>Login</h3>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
