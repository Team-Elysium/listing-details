import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.jsx'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
    );
  }
}

export default Dashboard;
const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Dashboard />, container);