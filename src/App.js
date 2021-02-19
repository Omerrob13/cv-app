import React, { Component } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import EducationRender from './render/EducationRender';
import Expirence from './components/Expirence';
import ExpirenceRender from './render/Expirence-render';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: {
        school: '',
        university: '',
        courses: '',
        year: '',
        display: 'inputs',
      },
      expirence: {
        company: '',
        position: '',
        fromDate: '',
        toDate: '',
        display: 'inputs',
      },
    };
    this.hnlChangeEducation = this.hnlChangeEducation.bind(this);
    this.onSubmitEducation = this.onSubmitEducation.bind(this);
    this.hnlChangeExpirence = this.hnlChangeExpirence.bind(this);
    this.onSaveExpirence = this.onSaveExpirence.bind(this);
    this.reset = this.reset.bind(this);
  }

  hnlChangeEducation(e) {
    const updateForm = { ...this.state.education };
    updateForm[e.target.id] = e.target.value;
    this.setState(prevState => {
      return {
        education: updateForm,
      };
    });
  }

  onSubmitEducation(e) {
    e.preventDefault();

    if (e.target.id === 'submit-education') {
      this.setState(prevState => {
        let jasper = { ...prevState.education, display: 'text' };
        return {
          education: jasper,
        };
      });
    } else {
      this.setState(prevState => {
        let jasper = { ...prevState.education, display: 'inputs' };
        return {
          education: jasper,
        };
      });
    }
  }

  hnlChangeExpirence(e) {
    const UpdateForm = { ...this.state.expirence };
    UpdateForm[e.target.id] = e.target.value;
    this.setState({
      expirence: UpdateForm,
    });
  }

  onSaveExpirence(e) {
    e.preventDefault();
    if (e.target.id === 'save-expirence') {
      this.setState(prevState => {
        let expirenceUpdate = { ...prevState.expirence, display: 'text' };
        return {
          expirence: expirenceUpdate,
        };
      });
    } else {
      this.setState(prevState => {
        let expirenceUpdate = { ...prevState.expirence, display: 'inputs' };
        return {
          expirence: expirenceUpdate,
        };
      });
    }
  }

  reset = e => {
    this.setState(
      prevStaet => {
        let resetState = { ...prevStaet[e.target.id] };
        for (const property in resetState) {
          if (resetState[property] === 'text') {
            resetState[property] = 'inputs';
            continue;
          }
          resetState[property] = '';
        }

        return {
          [e.target.id]: resetState,
        };
      },
      () => {}
    );
  };

  render() {
    const EducationComponent =
      this.state.education.display === 'inputs' ? Education : EducationRender;

    const ExpirenceComponent =
      this.state.expirence.display === 'inputs' ? Expirence : ExpirenceRender;

    return (
      <div>
        <h1 className="app-header">CV Application</h1>

        <Header />
        {/* <Education
          change={this.hnlChangeEducation}
          submit={this.onSubmitEducation}
          state={this.state.education}
        />
        <EducationRender /> */}
        <EducationComponent
          change={this.hnlChangeEducation}
          submit={this.onSubmitEducation}
          state={this.state.education}
          reset={this.reset}
        />
        <ExpirenceComponent
          change={this.hnlChangeExpirence}
          onSave={this.onSaveExpirence}
          state={this.state.expirence}
          reset={this.reset}
        />
      </div>
    );
  }
}

export default App;
