import React, { Component } from 'react';
class Expirence extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section-container">
        <form className="form-container">
          <h2 className="section-header">Expirence is the X factor!</h2>
          <div>
            <label htmlFor="company" className="input-label">
              {' '}
              Company Name:{' '}
            </label>
            <input
              onChange={this.props.change}
              type="text"
              id="company"
              value={this.props.state.company}
              placeholder="Company..."
            />
          </div>

          <br />

          <div>
            <label htmlFor="position" className="input-label">
              {' '}
              Position Title:{' '}
            </label>
            <input
              type="text"
              id="position"
              onChange={this.props.change}
              value={this.props.state.position}
              placeholder="Position..."
            />
          </div>

          <br />

          <div>
            <label htmlFor="fromDate" className="input-label">
              {' '}
              From Date:{' '}
            </label>
            <input
              type="text"
              id="fromDate"
              onChange={this.props.change}
              value={this.props.state.fromDate}
              placeholder="YYYY"
              className="input-date"
            />
          </div>

          <div>
            <label htmlFor="toDate" className="input-label">
              {' '}
              To Date:{' '}
            </label>
            <input
              type="text"
              id="toDate"
              onChange={this.props.change}
              value={this.props.state.toDate}
              placeholder="YYYY"
              className="input-date"
            />
          </div>

          <br />
          <button
            id="save-expirence"
            className="save-form-btn"
            onClick={this.props.onSave}
          >
            Save Expirence
          </button>

          <br />
        </form>
      </div>
    );
  }
}

export default Expirence;
