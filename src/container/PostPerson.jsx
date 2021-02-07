import React from 'react';
import Request from '../components/app/presentational/requestComp/Request';
import Response from '../components/app/presentational/response/Response';
import fetch from '../services/Fetch';
import styles from './PostPerson.css';

export default class postPerson extends React.Component {
  state={
    url: '',
    method: '',
    jsonObj: '',
    response: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetch();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  fetch = () => {
    const { url, method, jsonObj } = this.state;
    fetch(url, method, jsonObj)
      .then(res => this.setState({ response: JSON.stringify(res) }));
  }

  render() {
    const { url, method, jsonObj, response } = this.state;
    return (
      <>
        <div className={styles.PostPerson}>
          <Request 
            url={url}
            method={method}
            jsonObj={jsonObj}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />

          <Response 
            response={response}
          />
        </div>
    
      </>
    );
  }
}
