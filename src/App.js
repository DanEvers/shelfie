import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

// import Product from './Components/Product/Product';

class App extends Component {
    constructor() {
      super()

      this.state = {
        inventory : []
      }
    }

  componentDidMount() {
    this.get_inventory();
  }

  get_inventory = () => {
    axios.get(`/api/inventory`)
    .then(res => this.setState({
      inventory: res.data
    }))
    .catch(err => alert('Dan, there is something wrong. Go ahead and fix that code (Axios:getInventory)', err))
  }

  addProduct = () => {
    axios.post(`/api/product`)
    .then(res => this.setState({
      inventory: res.data
    }))
    .catch(err => alert('Dan, there is something wrong. Go ahead and fix that code (Axios:getInventory)', err))
  }

  render() {
    return (
    <div className="App">
      <Header/>
      <Dashboard inventory={this.state.inventory}/> 
      <Form/>
      
    </div>
  );
  }
}

export default App;
