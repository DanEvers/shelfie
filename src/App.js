import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: []
    };
    // this.get_inventory = this.get_inventory.bind(this);
  }

  get_inventory = () => {
    axios
      .get('/api/inventory')
      .then(res => this.setState({inventory: res.data}))
      .catch(err => console.log('get_inventory error: ', err));
  };

  addProduct = () => {
    axios
      .post("/api/product")
      .then(res =>
        this.setState({
          inventory: res.data
        })
      )
      .catch(err =>
        alert(
          "Dan, there is something wrong. Go ahead and fix that code (Axios:addProduct)",
          err
        )
      );
  };

  componentDidMount() {
    this.get_inventory();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard get_inventory={this.get_inventory} {...this.state} />
        <Form />
      </div>
    );
  }
}

export default App;
