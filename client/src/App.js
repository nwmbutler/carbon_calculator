import React, { Component } from "react";
import "./App.css";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    callAPI() {
        fetch("http://localhost:5000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }
    componentDidMount() {
        this.callAPI();
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Carbon Calculator</h1>
                <p className="App-intro">{this.state.apiResponse}</p>
                </header>
            </div>
        );
    }
}
export default App;
