import React from 'react';
import axios from 'axios';

export default class CalculateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { origin: '',
  destination: '',
  mode: ''
  };
  }

callAPI(new_data) {
      const response = axios.post("http://localhost:5000/testAPI", { posted_data: new_data });
      console.log('Returned data:', response);
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
}

  handleInputChange = e => {
    this.setState({

      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { origin, destination, mode } = this.state;

    const journey = {
      origin, destination, mode
    };

    this.callAPI(journey)
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

    <select name = 'mode' onChange={this.handleInputChange} value={this.state.mode}> >
        <option value="null" ></option>
        <option value="Car" >Car</option>
        <option value="Bike" >Bike</option>
        <option value="Walk" >Walk</option>

      </select>

          <button type="submit">
                Calculate
              </button>
        </form>
      );
    }
  }
