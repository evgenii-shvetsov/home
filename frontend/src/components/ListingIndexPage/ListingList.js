import React from 'react'
import ListingListItem from './ListingListItem';
import Carousel from 'react-elastic-carousel';
import Spinner from '../Spinner/Spinner';
import { GridLoader } from 'react-spinners';
import { useState, useEffect } from 'react';


const breakPoints = [
  {width:1, itemsToShow: 1},
  {width:550, itemsToShow: 2},
  {width:768, itemsToShow: 3},
  {width:1200, itemsToShow: 4},
];

//splice(0,5) restricts the number of objects shown
const ListingList = ( {listings ,text} ) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [listings]);

  return (
    <div className='listings-main'>
        <h1> {text ? text: "Homes For You in San Francisco, CA"}</h1>
        <hr id="hr" />
        
          <section className='listings-output' >

          {isLoading ? (
                  // <Spinner />
                  <GridLoader size={15} color={'lightblue'} />
                ) : (
                  <Carousel breakPoints={breakPoints} /*enableAutoPlay autoPlaySpeed={3000}*/>
                    {listings.map((listing, idx) => ( <ListingListItem listing={listing} key ={idx}/>))}
                  </Carousel>
                )}

                
          </section>
          
    </div>
  )
}

export default ListingList