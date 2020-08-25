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
        <p>{item.id}</p>
        <p>{item.title}</p>
        <p>{item.body}</p>
        <br></br>
      </div>
    );
  }
}

export default Product;