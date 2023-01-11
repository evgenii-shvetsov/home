import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import './index.css'

import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Page404 from './components/Page404'
import Footer from './components/Footer';
import ListingShowPage from './components/ListingShowPage';
import ListingFormPage from './components/ListingFormPage';
import MyHome from './components/MyHome';
import Search from './components/Search';
import SearchResult from './components/SearchFilter/SearchResult';

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path ='/listings/new' component={ListingFormPage}/>
          <Route exact path ='/listings/:listingId/edit' component={ListingFormPage}/>
          <Route exact path ='/listings/:listingId' component={ListingShowPage} />
          <Route exact path ='/myhome' component={MyHome} />
          
          <Route exact path="/search/:type" component={Search}/>
          <Route exact path="/search" component={SearchResult}/>
          
          <Route path="/error" component={Page404}/>
          <Redirect to="/error"/>
        </Switch>
      <Footer/>
    </>

  );
}

export default App;