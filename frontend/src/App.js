import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import './index.css'

import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Page404 from './components/Page404'
import Footer from './components/Footer';
// import SignupFormPage from './components/SignupFormPage';
// import LoginFormPage from './components/LoginFormPage';
function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Homepage} />

          {/* <Route exact path="/listings/for_rent" component={RentListings}/>
          <Route exact path="/listings/for_sale" component={SaleListings}/>
          <Route exact path="/myhome/account" component={UserProfile} /> */}

          <Route path="/error" component={Page404}/>
          <Redirect to="/error"/>
        </Switch>
      <Footer/>
    </>

  );
}

export default App;