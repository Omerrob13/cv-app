import React, { Component } from 'react';

class ExpirenceRender extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="personal-details-container">
        <h2 className="section-header">Expirence Details:</h2>
        <p className="p-details">Position: {this.props.state.company}</p>
        <p className="p-details">Company: {this.props.state.position}</p>
        <p className="p-details to-year">
          From Year: {this.props.state.fromDate}
        </p>
        <p className="p-details to-year">To year: {this.props.state.toDate}</p>

        <button onClick={this.props.onSave} className="edit-form-btn">
          Edit
        </button>
        <button
          className="edit-form-btn"
          onClick={this.props.reset}
          id="expirence"
        >
          Reset Expirence
        </button>
      </div>
    );
  }
}

export default ExpirenceRender;
