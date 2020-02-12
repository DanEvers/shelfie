import React, { Component } from "react";
import Product from '../Product/Product';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // inventory: []
    };
  }

  render() {
    // console.log(this.props.inventory)
    const mappedProducts = this.props.inventory.map(inventoryItems => {
      return (
        <Product
          key={inventoryItems.product_id}
        //   imageurl={inventory.imageurl}
        //   productname={inventory.productname}
        //   price={inventory.price}
        inventoryItems={inventoryItems}
        />
      );
    });
    return <div>{mappedProducts}</div>;
  }
}

export default Dashboard;
