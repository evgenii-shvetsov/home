import React from 'react'
import ListingListItem from './ListingListItem';
import Carousel from 'react-elastic-carousel';


const breakPoints = [
  {width:1, itemsToShow: 1},
  {width:550, itemsToShow: 2},
  {width:768, itemsToShow: 3},
  {width:1200, itemsToShow: 4},
];

const ListingList = ( {listings ,text} ) => {
  return (
    <div className='listings-main'>
        <h1> {text ? text: "Homes For You in San Francisco, CA"}</h1>
        <hr id="hr" />
          <section className='listings-output' >
                <Carousel breakPoints={breakPoints} /*enableAutoPlay autoPlaySpeed={3000}*/>
              {listings?.map((listing, idx) => ( <ListingListItem listing={listing} key ={idx}/>) )}
            </Carousel>
          </section>
          
    </div>
  )
}

export default ListingList