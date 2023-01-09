import React, { useState } from "react";
import * as sessionActions from '../../store/session'
import { useDispatch } from "react-redux";
import "./SaveModalRequest.css";
import SignupFormModal from "../SignupFormModal";
// import { Redirect } from 'react-router-dom';// Added for modal

function RequestForm( {setShowModal}) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const [condition, setCondition] = useState(true)
  console.log(setShowModal)
//   const sessionUser = useSelector(state => state.session.user); // Added for modal

//   if (sessionUser) return <Redirect to="/" />;// Added for modal

  const handleDemoSubmit = (e) =>{
    e.preventDefault();
    dispatch(sessionActions.login({ credential: "demo-user", password:"demo-password" }))
    .then(()=>setShowModal(false))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(()=>setShowModal(false))
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

    <div className="request-form">
      <h3>Sign in to save home</h3>
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

        <ul className="request-errors-list">
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <button type="submit">Log In</button>
        
        <button id="demo-request-btn" onClick={handleDemoSubmit}>Demo login</button>
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

export default RequestForm;