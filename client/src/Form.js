import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { origin: '',
  destination: ''
  };
  }


  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  handleSubmit = e => {
    e.preventDefault();

    const { origin, destination } = this.state;

    const journey = {
      origin, destination
    };
    alert(journey.destination)
  }








  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>Carbon Calculator</h1>
          <p>From</p>
          <input
            type="text"
            name="origin"
            onChange={this.handleInputChange}
          />
          <p>To</p>
          <input
            type="text"
            name = 'destination'
            onChange={this.handleInputChange}
          />
          <button type="submit">
                Calculate
              </button>
        </form>
      );
    }
  }
