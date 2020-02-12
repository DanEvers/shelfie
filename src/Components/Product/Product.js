import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { imageurl, productname, price } = this.props.inventoryItems;

    return (
      <div>
        <img src={imageurl} alt="alt text" />
        <p>{productname}</p>
        <p>{price} </p>
      </div>
    );
  }
}

export default Product;
