import React from 'react';

const Stars = (props) => {
  return (
  <div>
    This sale has been saved by {props.stars.map((listing, id) => <p> key={id} {listing.price}</p>)} users.
  </div>
  )
}
export default Stars;