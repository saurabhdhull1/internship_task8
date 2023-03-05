import React, { Component } from "react";
import "./Cart.scss";

export default class Cart extends Component {
  handleDeleteItem = (index) => {
    const newCartItems = [...this.props.cartItems];
    newCartItems.splice(index, 1);
    this.props.onDeleteItem(newCartItems);
  };

  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center", padding: "20px" }}>
          Your cart has {this.props.cartItems.length} items
        </h2>
        {this.props.cartItems.map((item, index) => (
          <div key={index} className="cart">
            <div>
              <img src={item.img} alt="" />
              <h1>{item.title}</h1>
              <strike>{item.wrongrate}</strike>
              <h3>{item.rate}</h3>
              <button
                className="btn btn-danger"
                onClick={() => this.handleDeleteItem(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
