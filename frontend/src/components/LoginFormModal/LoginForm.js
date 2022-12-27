import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
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
        console.log("inside catch block")
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) {
          setErrors(data.errors)
          console.log(data.errors,"inside if block")
        }
        else if (data) {
          setErrors([data])
          console.log("inside if else block")
        }
        else {
          setErrors([res.statusText])
          console.log("inside else block")
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>

      <ul className="errors-ul">
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>

      <label>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Log In</button>
      <button onClick={(e) => {
          e.preventDefault();
          dispatch(sessionActions.login({ credential: "demo-user", password:"demo-password" }))
        }}>Demo Login</button>
    </form>
  );
}

export default LoginForm;