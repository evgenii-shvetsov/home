import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import SignupFormModal from "../SignupFormModal";
// import { Redirect } from 'react-router-dom';// Added for modal

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
//   const sessionUser = useSelector(state => state.session.user); // Added for modal

//   if (sessionUser) return <Redirect to="/" />;// Added for modal

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
 
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) {
          setErrors(data.errors)

        }
        else if (data) {
          setErrors([data])

        }
        else {
          setErrors([res.statusText])
        }
      });
  };

  return (

    <div className="login-form">
      <h3>Welcome Home</h3>
      <form onSubmit={handleSubmit}>

        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder="Enter username or email"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </label>

        <ul className="login-errors-list">
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <button type="submit">Log In</button>
        
        <button id="demo-login-btn" onClick={(e) => {
            e.preventDefault();
            dispatch(sessionActions.login({ credential: "demo-user", password:"demo-password" }))
          }}>Demo Login</button>
      </form>

      <div className="sign-up-request">
              <p>
                Don't have an account? <br />
              </p>
               <SignupFormModal />
              
          </div>

    </div>
  );
}

export default LoginForm;