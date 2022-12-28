import React from 'react'
import { Link } from 'react-router-dom'
import "./Page404.css"


const errorPage = () => {
  return (
    <section>
      <section className='error404-style'>
        <div className='error-text'>
          <h1>Uh oh, <br />
          something broke.
          </h1>
          <p>Error 404 - page not found</p>
          <Link to="/"><button>Return Home</button></Link>
        </div>
      </section>
    </section>
  )
}

export default errorPage