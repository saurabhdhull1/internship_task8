import React, { Component } from "react";
import Slider from "./slider/Slider";
import Slider2 from "./slider/Slider2";
import Dealday from "./2Dealday/Dealday";
import Newarrival from "./3newarrival/Newarrival";
import Ourproduct from "./4ourproduct/Ourproduct";
import Bestdeal from "./5bestdeal/Bestdeal";
import Last from "./6last/Last";
import Footer from "../footer/Footer";

export default class Body extends Component {
  render() {
    
    // cart data from Newarrival
    const datafromNewarrival = ({ title, img, wrongrate, rate }) => {
      this.props.addToCart({ title, img, wrongrate, rate })
    }
    // const datafromLast = ({ title, img, wrongrate, rate }) => {
    //   console.log({ title, img, wrongrate, rate })
    // }

    return (
      <>
        <Slider />
        <Slider2 />
        {/* ! Deal Day*/}
        <hr />
        <Dealday />
        <hr />

        {/* ! New arrivals*/}

        <Newarrival datafromNewarrival={datafromNewarrival} />
        <hr />

        {/* ! Our products*/}

        <Ourproduct datafromNewarrival={datafromNewarrival} />
        <hr />

        {/* ! Best deals*/}

        <Bestdeal />
        <hr />

        {/* ! Winmart*/}

        <div className="container-fluid">
          <div className="row">
            <img src="/assets/e.png" alt="" />
          </div>
        </div>
        <hr />

        {/* ! New Arivals*/}
        <div className="container-fluid">
          <div className="row arrival1">
            <div className="col-md-12">
              <h1 align="center" style={{
                backgroundColor:"rgb(216, 216, 216)",
                padding:"20px",
                fontSize:"3rem"
              }}>
                <span style={{color:"#00a9f4"}}>New </span>Arrivals
              </h1>
            </div>
          </div>
          <div className="row newarival">
            <div>
              <img src="/assets/f1.png" alt="" />
            </div>
            <div>
              <img src="/assets/f2.png" alt="" />
            </div>
            <div>
              <img src="/assets/f3.png" alt="" />
            </div>
          </div>
        </div>
        <hr />

        {/* ! Last */}

        <Last datafromLast={datafromNewarrival} />

        {/* ! Footer */}
        <Footer />
      </>
    );
  }
}
