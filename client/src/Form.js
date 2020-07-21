import React from 'react';

export default class Form extends React.Component {
  render() {
      return (
        <form>
          <h1>Carbon Calculator</h1>
          <p>From</p>
          <input
            type="text"
          />
          <p>To</p>
          <input
            type="text"
          />
        </form>
      );
    }
  }
