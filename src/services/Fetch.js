/* eslint-disable max-len */

const Fetch = (url, method, jsonObj) => {
  if(method !== '/get'){
    return fetch(url, { method, headers: { 'Content-type': 'application/json' }, jsonObj })
      .then(res => res.json());
  }

  return fetch(url)
    .then(res => res.json());
};

export default Fetch;
