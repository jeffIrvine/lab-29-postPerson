import React from 'react';
import PropTypes from 'prop-types';
import styles from './Response.css';

function Response({ response }) {
  return (
    <div className={styles.Response}>
      <h2>Response</h2>
      {response}
    </div>
  );
}

Response.propTypes = {
  response: PropTypes.string.isRequired
};

export default Response;
