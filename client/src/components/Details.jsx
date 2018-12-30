import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul className="details">
      {this.props.details.map((detail, ids) => {
        return (
          <li className="detail_item" key={ids}>
          <div className="building-title">{detail.streetAddress}</div>
          <div className="inner_details_price">${detail.price} 
            <span className="secondary_text"> FOR SALE</span>
          </div>
          <div className="inner_details">
            <span className="detail_cell first_detail_cell">{detail.squareFootage} ft^2 </span>
            <span className="detail_cell">{detail.pricePerSquareFoot} per ft^2 </span>
            <span className="detail_cell">{detail.rooms} rooms </span>
            <span className="detail_cell">{detail.beds} beds </span>
            <span className="detail_cell last_detail_cell">{detail.baths} baths </span>
          </div>
          <div className="inner_details">{detail.houseType} in {detail.neighborhood}</div>
          </li>
        )
      })}
      </ul>
    )
  }
}

export default Details;
