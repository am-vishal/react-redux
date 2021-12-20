import React, { Component } from 'react';
class Popup extends Component {
  state = {
    query: '',
    values: '',
    disabled: false,
  };

  onChangeHandle = (e) => {
    const { value } = e.target;
    if (value.length === 6) {
      this.setState({
        query: value,
      });
    }
  };

  handleClick = (e) => {
    let q = this.state.query;
    e.preventDefault();
    const url = `https://api.postalpincode.in/pincode/${q}`;
    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        data?.map((val, i) => {
          if (val.Status === 'Success') {
            this.setState({ values: val.PostOffice[0] });
            this.setState({ disabled: !this.state.disabled });
          }
        });
      });
  };

  render() {
    return (
      <form className="form">
        <input
          type="text"
          placeholder="Pincode"
          onChange={this.onChangeHandle}
          value={this.state.values.Pincode}
          disabled={this.state.disabled}
        />
        <br />
        <input type="text" placeholder="Locality" value={this.state.values.Name} disabled={this.state.disabled} />
        <br />
        <input type="text" placeholder="Block" value={this.state.values.Block} disabled={this.state.disabled} />
        <br />
        <input type="text" placeholder="State" value={this.state.values.State} disabled={this.state.disabled} />
        <br />
        <input type="text" placeholder="Country" value={this.state.values.Country} disabled={this.state.disabled} />
        <br />
        <input type="text" placeholder="District" value={this.state.values.District} disabled={this.state.disabled} />
        <br />
        <button onClick={this.handleClick}>Click</button>
        <button onClick={this.props.closePopup}>close me</button>
      </form>
    );
  }
}

export default Popup;
