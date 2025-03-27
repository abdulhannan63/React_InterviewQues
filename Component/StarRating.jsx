// Create a star rating component where users can rate something from 1 to 5 stars.
import React, { useState } from 'react'

const StarRating = () => {
  const [rating,setRating] = useState(0);

  return (
    <>
      <div>
        {
          [...Array(5)].map((e,i)=>{
            const starRate = i+1;
            return ( <span
            key={i}
            onClick={() => setRating(starRate)}
            style={{ cursor: 'pointer', color: starRate <= rating ? 'gold' : 'gray' }}
          >
            ★
          </span>)

          })
        }
      </div>
    </>
  )
}

export default StarRating