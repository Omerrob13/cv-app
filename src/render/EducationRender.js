import React from 'react';

function EducationRender(props) {
  return (
    <div className="personal-details-container">
      <h2 className="section-header">Education Details:</h2>
      <p className="p-details"> School: {props.state.school} </p>
      <p className="p-details"> University: {props.state.university}</p>
      <p className="p-details"> Courses: {props.state.courses}</p>
      <p className="p-details"> Year: {props.state.year}</p>
      <button onClick={props.submit} className="edit-form-btn">
        Edit
      </button>
      <button onClick={props.reset} id="education" className="edit-form-btn">
        Reset
      </button>
    </div>
  );
}

export default EducationRender;
