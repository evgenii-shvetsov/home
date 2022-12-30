import React from 'react'
import "./Homepage.css"
import ListingIndexPage from '../ListingIndexPage'
import buyLogo from "../../assets/buy-home.jpg"
import rentLogo from "../../assets/rent-home.jpg"

const Homepage = () => {
  return (
    <main className='main-homepage'>

      <section className='search-bar'></section>

      <section className='listings-cards'><ListingIndexPage/></section>

      <section className='deal-types'>

        <div className='deal-type-card'>
          <img src={buyLogo} alt="buy home logo" />
          <h3>Buy a home</h3>
          <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
          <button className='deal-type-button'>Browse homes</button>
        </div>

        <div className='deal-type-card'>
          <img src={rentLogo} alt="rent home logo" />
          <h3>Rent a home</h3>
          <p>Whether you’re looking for a single-family home, high-rise apartment, or something in between, we’ll help you find it.</p>
          <button className='deal-type-button'>Find rentals</button>
        </div>

      </section>

    </main>
  )
}

export default Homepage