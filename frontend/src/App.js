import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import Homepage from './components/Homepage';
import Navigation from './components/Navigation';
import Page404 from './components/Page404'
// import SignupFormPage from './components/SignupFormPage';
// import LoginFormPage from './components/LoginFormPage';
function App() {
  return (
    <>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/error" component={Page404}/>
      <Redirect to="/error"/>
    </Switch>
      {/* <Switch> */}
        {/* <Route path="/login">
          <LoginFormPage />
        </Route> */}
        {/* <Route path="/signup">
          <SignupFormPage />
        </Route> */}
      {/* </Switch> */}
    </>

  );
}

export default App;