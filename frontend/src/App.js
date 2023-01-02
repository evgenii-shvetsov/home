import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import './index.css'

import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Page404 from './components/Page404'
import Footer from './components/Footer';
import ListingShowPage from './components/ListingShowPage';
import ListingFormPage from './components/ListingFormPage';

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path ='/listings/new' component={ListingFormPage}/>
          <Route path ='/listings/:listingId/edit' component={ListingFormPage}/>
          <Route path ='/edit' component={ListingFormPage}/>
          <Route path ='/listings/:listingId' component={ListingShowPage} />
          
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