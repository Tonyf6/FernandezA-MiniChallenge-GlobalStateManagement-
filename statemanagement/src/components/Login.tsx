import { useReducer } from 'react';
import loginReducer from '../reducers/loginReducer';

const Login = () => {
  const [username, dispatch] = useReducer(loginReducer, ""); 

  // Handle login
  const handleLogin = () => {
    dispatch({ type: "LOGIN", username: "Tony"});
  };

  // Handle logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const isLoggedIn = username !== ""; 

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Authentication</h1>
      {isLoggedIn ? (
        <div>
          <h2>It is I, {username}!</h2>
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
        <button className="btn btn-primary" onClick={handleLogin}>
          Log In
        </button>
      )}
    </div>
  );
};

export default Login;