import React, { Component } from 'react';
import productImage from '../assets/mobil-1-5w-30-fs-square-sm.jpg';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params
    fetch(`${process.env.REACT_APP_PDETAIL_API}${id}`)
      .then(res => res.json())
      .then(item => this.setState({ item }))
  }
  render() {
    const { item } = this.state;
    return (
      <div>
        <h2>Product Details</h2>
        <p></p>
        <div class="row">
          <div class="col">
            <center><img src={productImage} alt="Mobil 1" width="40%" /></center>
          </div>
          <div class="col-7">
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Price ($): {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
        <br></br>
      </div>
    );
  }
}

export default Product;