import React, {Component} from 'react';
import Popup from './Popup';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    return (
      <div>
        <h1>Index</h1>
        <button onClick={this.togglePopup.bind(this)}>show popup</button>
        {this.state.showPopup ? <Popup text="Close Me" closePopup={this.togglePopup.bind(this)} /> : null}
      </div>
    );
  }
}
export default Index;
