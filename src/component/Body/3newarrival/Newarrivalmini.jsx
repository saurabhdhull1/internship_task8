import React, { Component } from "react";
import "./Newarrival.scss";

export default class Newarrivalmini extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart() {
    const { title, img, wrongrate, rate } = this.props;
    this.props.datafromNewarrivalmini({ title, img, wrongrate, rate });
  }

  render() {
    const { title, img, wrongrate, rate } = this.props;
    return (
      <div className="newarrivalmini">
        <div>
          <p>Bin Bakar Electronics</p>
          <p>{title}</p>
        </div>
        <img src={img} alt="" />
        <div className="rate">
          <strike>{wrongrate}</strike>
          <div>{rate}</div>
        </div>
        <button onClick={this.handleAddToCart}>Add to cart</button>
      </div>
    );
  }
}
