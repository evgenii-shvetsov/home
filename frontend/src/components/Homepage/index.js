import React from 'react'
import "./Homepage.css"
import ListingIndexPage from '../ListingIndexPage'

const Homepage = () => {
  return (
    <main>
      <section className='search-bar'></section>
      <section className='listings-cards'><ListingIndexPage/></section>
      <section className='deal-types'></section>
    </main>
  )
}

export default Homepage