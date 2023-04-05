import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        console.log(advice);
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleAdvice = () => {
    this.fetchAdvice();
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.handleAdvice}>
            <span> GIVE ME SOME ADVICE! 🙂</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
