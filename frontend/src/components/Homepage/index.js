import React from 'react'
import "./Homepage.css"
import ListingIndexPage from '../ListingIndexPage'
import buyLogo from "../../assets/buy-home.jpg"
import rentLogo from "../../assets/rent-home.jpg"
import {Link} from 'react-router-dom'
// import {  useDispatch } from "react-redux";
// import { fetchFavorites } from '../../store/favorites'

// import {useSelector} from "react-redux"
const Homepage = () => {

  // const sessionUser = useSelector(state => state.session.user);

  return (
    <main className='main-homepage'>

      <section className='search-bar'></section>

      <section className='listings-cards'><ListingIndexPage/></section>

      <section className='deal-types'>

        <div className='deal-type-card'>
          <img src={buyLogo} alt="buy home logo" />
          <h3>Buy a home</h3>
          <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
          <Link className='deal-type-link' to="/search/buy">
            <button className='deal-type-button'>Browse homes</button>
          </Link>
        </div>

        <div className='deal-type-card'>
          <img src={rentLogo} alt="rent home logo" />
          <h3>Rent a home</h3>
          <p>Whether you’re looking for a single-family home, high-rise apartment, or something in between, we’ll help you find it.</p>
          <Link className='deal-type-link' to="/search/rent"> 
            <button className='deal-type-button'>Find rentals</button>
          </Link>
        </div>

      </section>

    </main>
  )
}

export default Homepage