import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Details from './components/Details.jsx'
// import Agent from './components/Agent.jsx'
// import Dashboard from './components/Dashboard.jsx'
import Modal from './components/Modal.jsx'
import ShareModal from './components/ShareModal.jsx'
import Stars from './components/Stars.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      show: false,
      showShare: false,
      // agent: []
    }
    this.getDetails = this.getDetails.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showShareModal = this.showShareModal.bind(this);
    this.hideShareModal = this.hideShareModal.bind(this);
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails() {
    let id = document.location.pathname;
    id = parseInt(id.match(/\d+/g));

    Axios.get(`/api/items/${id}`)
    .then(({ data }) => {
      console.log(data)
      this.setState({
        details: data,
      });
    });
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

  render() {
    return (
      <div className="app">
        <div className="main">
          <Details details={this.state.details}/>
        </div>
        <div className="actions">
          <Modal show={this.state.show} handleClose={this.hideModal}/>
          <ShareModal show={this.state.showShare} handleClose={this.hideShareModal}/>
            <button type="button" onClick={this.showModal}>SAVE</button>
            <button type="button" onClick={this.showShareModal}>SHARE</button>
        </div>
        {/* <Stars stars={this.state.stars}/> */}
      </div>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('app'));