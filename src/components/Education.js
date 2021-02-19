import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section-container">
        <form className="form-container">
          <h2 className="section-header">Education is the key!</h2>
          <div>
            <label htmlFor="school" className="input-label">
              {' '}
              School:{' '}
            </label>
            <input
              id="school"
              type="text"
              onChange={this.props.change}
              value={this.props.state.school}
              placeholder="School..."
            ></input>
          </div>

          <br />

          <div>
            <label htmlFor="university" className="input-label">
              {' '}
              University:{' '}
            </label>
            <input
              id="university"
              type="text"
              onChange={this.props.change}
              value={this.props.state.university}
              placeholder="University..."
            ></input>
          </div>

          <br />

          <div>
            <label htmlFor="courses" className="input-label">
              {' '}
              Profesional Courses:{' '}
            </label>
            <input
              id="courses"
              type="text"
              onChange={this.props.change}
              value={this.props.state.courses}
              placeholder="Courses..."
            ></input>
          </div>

          <br />

          <div>
            <label htmlFor="year" className="input-label">
              {' '}
              Straing school year:{' '}
            </label>
            <input
              id="year"
              type="text"
              onChange={this.props.change}
              value={this.props.state.year}
              placeholder="Year"
              className="input-date"
            ></input>
          </div>

          <br />

          <button
            onClick={this.props.submit}
            id="submit-education"
            className="save-form-btn"
          >
            Save Education
          </button>
        </form>
      </div>
    );
  }
}

export default Education;
