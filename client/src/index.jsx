import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Details from './components/Details.jsx'
// import Agent from './components/Agent.jsx'
// import Dashboard from './components/Dashboard.jsx'
import Modal from './components/Modal.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      show: false
      // agent: []
    }
    this.getDetails = this.getDetails.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    // let {id} = req.params;
    this.getDetails();
  }

  getDetails() {
    Axios.get("/api/items/88")
    .then(({ data }) => {
      this.setState({
        details: data
      });
    });
  }
  
  showModal() {
    this.setState({ show: true });
  }
  
  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <Details details={this.state.details}/>
          {/* <Dashboard /> */}
          <Modal show={this.state.show} handleClose={this.hideModal} >
            <p>Modal</p>
            <p>Data</p>
          </Modal>
          <button type='button' onClick={this.showModal}>Open</button>
        </div>
      </div>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('app'));