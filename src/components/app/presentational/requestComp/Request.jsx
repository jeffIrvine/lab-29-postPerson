import React from 'react';
import PropTypes from 'prop-types';

function Request({ url, method, jsonObj, onSubmit, onChange }) {
  return (
    <div>
      <form onSubmit={onSubmit} className="form-body">
        <input 
          placeholder="url" 
          type="text" 
          name="url" 
          value={url} 
          onChange={onChange} 
        />
        <div>
          <input 
            type="radio" 
            name="method" 
            value="/get" 
            checked={method === '/get'} 
            onChange={onChange}
          /> 
          <span>/get</span>

          <input 
            type="radio" 
            name="method" 
            value="/post"
            checked={method === '/post'} 
            onChange={onChange} 
          /> 
          <span>/post</span>

          <input 
            type="radio" 
            name="method" 
            value="/put"
            checked={method === '/put'} 
            onChange={onChange} 
          /> 
          <span>/put</span>

          <input 
            type="radio" 
            name="method" 
            value="/delete"
            checked={method === '/delete'} 
            onChange={onChange} 
          /> 
          <span>/delete</span>
        </div>
        <div>
          <textarea 
            name="jsonObj"
            placeholder="Input Json Object here..." 
            value={jsonObj} 
            onChange={onChange}>
          </textarea>
        </div>
        <button className="submit-button" >Submit</button>
      </form>
    </div>
  );
}

Request.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  jsonObj: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Request;
