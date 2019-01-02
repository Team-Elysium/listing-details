import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul className="details">
      {this.props.details.map((detail, id) => {
        return (
          <li className="detail_item" key={id}>
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
          <div className="house_type">{detail.houseType} in <span className="blue_text">{detail.neighborhood}</span></div>
          <div className="stars">This sale has been saved by {detail.stars} users.
          See a problem with this listing? Report it here.</div>
          <div className="realtor">Listing by {detail.realty}, Limited Liability Broker, 660 Madison Ave, New York NY 10065.</div>
          <div className="realtor_box">
            <div className="listed">LISTED AT:</div>
            <div className="realtor_company blue_text bold">{detail.realty}</div>
            <div className="agent blue_text">{detail.realtor} </div>
            <div className="agent_button">CONTACT AGENT</div>
          </div>
          </li>
        )
      })}
      </ul>
    )
  }
}

export default Details;
