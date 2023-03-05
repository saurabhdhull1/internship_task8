import "./Last.scss";
import React, { Component } from "react";

export default class Lastmini extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  handleAddToCart() {
    const { title, img, wrongrate, rate } = this.props;
    this.props.datafromLastmini({ title, img, wrongrate, rate });
  }
  render() {
    const { title, img, wrongrate, rate } = this.props;
    return (
      <div className="lastmini">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <div>Bin Bakar Electronics</div>
          <p>{title}</p>
          <div className="rate">
            <strike>{wrongrate}</strike> <span>{rate}</span>
          </div>
          <button onClick={this.handleAddToCart}>Add to cart</button>
        </div>
      </div>
    );
  }
}
