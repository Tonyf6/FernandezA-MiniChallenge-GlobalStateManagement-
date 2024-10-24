import { useReducer, useState } from 'react';
import loginReducer from '../reducers/loginReducer';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, dispatch] = useReducer(loginReducer, ""); 

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true)
    dispatch({ type: "LOGIN", username: "Tony"});
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false)
    dispatch({ type: "LOGOUT" });
  };



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