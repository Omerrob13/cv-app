import React, { Component, useState, useEffect } from 'react';

function Header(props) {
  const [name, setName] = useState('cc');
  const [sur, setSur] = useState('');
  const [adress, setAdress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [display, setDisplay] = useState('inputs');
  const value = useState(3344);
  const [alon, setAlon] = useState('ccvvzz');

  const [state, setState] = useState({
    name: '',
    sur: '',
    adress: '',
    email: '',
    phone: '',
    display: 'inputs',
  });

  function handleChange(e) {
    setState(prevState => ({ ...prevState, [e.target.id]: e.target.value }));
  }

  const onSubmitForm = e => {
    e.preventDefault();
    setState(prevState => {
      return { ...prevState, display: 'text' };
    });
  };

  const edit = e => {
    setState(prevState => ({ ...prevState, display: 'inputs' }));
  };

  const resetCv = e => {
    setState(prevState => ({
      ...prevState,
      name: '',
      sur: '',
      adress: '',
      email: '',
      phone: '',
      display: 'inputs',
    }));
  };

  if (state.display === 'inputs') {
    return (
      <form id="header-form" className="personal-details-container">
        <h2 className="section-header">
          Your personal details shall remain secret!
        </h2>
        <label htmlFor="name" className="p-details">
          Enter name:{' '}
        </label>
        <input
          value={state.name}
          type="text"
          id="name"
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="sur" className="p-details">
          Enter Family name:{' '}
        </label>
        <input
          value={state.sur}
          type="text"
          id="sur"
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>

        <label htmlFor="adress" className="p-details">
          Enter Adress:{' '}
        </label>
        <input
          value={state.adress}
          type="text"
          id="adress"
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>

        <label htmlFor="email" className="p-details">
          Enter Email:{' '}
        </label>
        <input
          value={state.email}
          type="email"
          id="email"
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>

        <label htmlFor="phone" className="p-details">
          Enter Phone:{' '}
        </label>
        <input
          value={state.phone}
          type="tel"
          id="phone"
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>

        <button onClick={onSubmitForm} type="submit" className="edit-form-btn">
          Save Personal Details:
        </button>
      </form>
    );
  } else {
    return (
      <div className="personal-details-container">
        <h2 className="section-header"> Personal Details </h2>
        <p className="p-details">Name: {state.name}</p>
        <p className="p-details">SurName: {state.sur}</p>
        <p className="p-details">adress: {state.adress}</p>
        <p className="p-details">Email: {state.email}</p>
        <p className="p-details">Phone: {state.phone}</p>
        <button onClick={edit} className="edit-form-btn">
          Edit
        </button>
        <button onClick={resetCv} className="edit-form-btn">
          Reset CV
        </button>
      </div>
    );
  }
}

export default Header;
