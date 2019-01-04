import React from 'react';
import Modal from './Modal.jsx'
import ShareModal from './ShareModal.jsx'
import ProblemModal from './Problem.jsx'

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showShare: false,
      showProblem: false
    }
    this.numberWithCommas = this.numberWithCommas.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showShareModal = this.showShareModal.bind(this);
    this.hideShareModal = this.hideShareModal.bind(this);
    this.showProblemModal = this.showProblemModal.bind(this);
    this.hideProblemModal = this.hideProblemModal.bind(this);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 })
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  showShareModal() {
    this.setState({ showShare: true });
  }

  hideShareModal() {
    this.setState({ showShare: false });
  }

  showProblemModal() {
    this.setState({ showProblem: true });
  }

  hideProblemModal() {
    this.setState({ showProblem: false });
  }

  render() {
    return (
      <ul className="details">
        {this.props.details.map((detail, id) => {
          return (
            <li className="detail_item" key={id}>
              <div className="building-title">{detail.streetAddress}</div>
              <div className="inner_details_price">${this.numberWithCommas(detail.price)}
                <span className="secondary_text"> FOR SALE</span>
              </div>
              <div className="inner_details">
                <span className="detail_cell first_detail_cell">{detail.squareFootage} ft<sup>2</sup> </span>
                <span className="detail_cell">{detail.pricePerSquareFoot} per ft<sup>2</sup> </span>
                <span className="detail_cell">{detail.rooms} rooms </span>
                <span className="detail_cell">{detail.beds} beds </span>
                <span className="detail_cell last_detail_cell">{detail.baths} baths </span>
              </div>
              <div className="house_type">{detail.houseType} in <span className="blue_text">{detail.neighborhood}</span></div>

              <div className="open-house-sign">OPEN HOUSE</div>
              <div className="open-house">
                <div className="open-house-text">Sun, Jan 6 (12:00-1:00PM)</div>
                <div className="open-house-cal calendar fill_text"><span className="fa fa-calendar"></span> ADD TO PLANNER</div>
              </div>
              <div className="actions">
                <Modal show={this.state.show} handleClose={this.hideModal} />
                <ShareModal show={this.state.showShare} handleClose={this.hideShareModal} />
                <button type="button" className="star btn" onClick={this.showModal}
                ><span className="fa fa-star"></span> SAVE </button>
                <button type="button" className="btn" onClick={this.showShareModal}><span className="fa fa-envelope"></span> SHARE</button>
              </div>

              <div className="stars">This sale has been saved by {detail.stars} users.</div>
              <div className="problem">See a problem with this listing? Report it <span className="blue_text">here</span>
                <ProblemModal show={this.state.showProblem} handleClose={this.hideProblemModal} />
                <button type="button" onclick={this.showProblemModal}>.</button>
              </div>
              <div className="realtor">Listing by {detail.realty}, Limited Liability Broker, 660 Madison Ave, New York NY 10065.</div>
              <div className="realtor_box">
                <div className="contact_title">CONTACT AGENT</div>
                <div className="realtor-tabs-container">
                  <div className="realtor-tabs first">Your Name</div>
                  <div className="realtor-tabs second">Phone Number</div>
                  <div className="realtor-tabs third">Email</div>
                <div className="realtor-interested-box">
                  <div className="realtor-tabs last_interest">I'm interested in {detail.streetAddress}. <br/>
                  <br/><br/><br/><br/></div>
                  </div>
                </div>
                <div className="listed">LISTED AT:</div>
                <div className="realtor_company blue_text bold">{detail.realty}</div>
                <div className="agent blue_text">{detail.realtor} </div>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Details;
