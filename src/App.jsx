import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./component/Body/Body";
import Navbar from "./component/navbar/Navbar";
import Nopage from "./component/nopage/Nopage";
import Profile from "./component/profile/Profile";
import Cart from "./component/cart/Cart";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart({ title, img, wrongrate, rate }) {
    this.setState({
      cartItems: [
        {
          title,
          img,
          wrongrate,
          rate
        },
        ...this.state.cartItems
      ]
    });
    
  }

  handleDeleteItem = (newCartItems) => {
    this.setState({ cartItems: newCartItems });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar cartItemscount={this.state.cartItems.length}/>
        <Routes>
          <Route path="/" element={<Body addToCart={this.addToCart}  />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart cartItems={this.state.cartItems} onDeleteItem={this.handleDeleteItem} />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
