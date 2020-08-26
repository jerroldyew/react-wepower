import React, { Component } from 'react';

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
        <p>Name: {item.name}</p>
        <p>Description: {item.description}</p>
        <p>Price: {item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <br></br>
      </div>
    );
  }
}

export default Product;