import "./Ourproduct.scss";
import Newarrivalmini from "../3newarrival/Newarrivalmini";

import React, { Component } from "react";

export default class Ourproduct extends Component {
  render() {
    const details = [
      {
        title: "Samsung 40N5300 S...",
        img: "/assets/b1.png",
        wrongrate: "RS 50.000",
        rate: "RS 56.000",
      },
      {
        title: "Samsung Automatic.. ",
        img: "/assets/c1.png",
        wrongrate: "RS 1.10.000",
        rate: "RS 1.00.000",
      },
      {
        title: "Haier HSU-12HFMAC ..",
        img: "/assets/c2.png",
        wrongrate: "RS 76.000",
        rate: "RS 70.000",
      },
      {
        title: "Anex Roti Maker ..",
        img: "/assets/c3.png",
        wrongrate: "RS 70.000",
        rate: "RS 60.000",
      },
      {
        title: "Gree GS-12FITH..",
        img: "/assets/c1.png",
        wrongrate: "RS 86.000",
        rate: "RS 80.000",
      },
      {
        title: "Gree Air Conditioner..",
        img: "/assets/c4.png",
        wrongrate: "RS 1.10.000",
        rate: "RS 1.00.000",
      },
    ];
    const datafromNewarrivalmini = ({ title, img, wrongrate, rate }) => {
      this.props.datafromNewarrival({ title, img, wrongrate, rate })
    };
  

    return (
      <div className="ourproduct">
        <div className="ourproduct1">
          <h1>
            <span>Our </span>Products
          </h1>
        </div>

        <div className="container-fluid">
          <div className="row ourproduct2">
            <div className="col-md-5 ourproduct21">
              <img src="/assets/c.png" alt="" className="img-fluid" />
            </div>
            <div className="col-md-7 ourproduct22">
              <div className="newarrivalmini1">
                <div className="newarrivalmini11">
                  <Newarrivalmini
                    title={details[0].title}
                    img={details[0].img}
                    wrongrate={details[0].wrongrate}
                    rate={details[0].rate}
                    datafromNewarrivalmini={datafromNewarrivalmini}
                  />{" "}
                </div>
                <div className="newarrivalmini11">
                  <Newarrivalmini
                    title={details[1].title}
                    img={details[1].img}
                    wrongrate={details[1].wrongrate}
                    rate={details[1].rate}
                    datafromNewarrivalmini={datafromNewarrivalmini}
                  />{" "}
                </div>
                <div className="newarrivalmini11">
                  <Newarrivalmini
                    title={details[2].title}
                    img={details[2].img}
                    wrongrate={details[2].wrongrate}
                    rate={details[2].rate}
                    datafromNewarrivalmini={datafromNewarrivalmini}
                  />{" "}
                </div>
                <div className="newarrivalmini11">
                  <Newarrivalmini
                    title={details[3].title}
                    img={details[3].img}
                    wrongrate={details[3].wrongrate}
                    rate={details[3].rate}
                    datafromNewarrivalmini={datafromNewarrivalmini}
                  />{" "}
                </div>
                <div className="newarrivalmini11">
                  <Newarrivalmini
                    title={details[4].title}
                    img={details[4].img}
                    wrongrate={details[4].wrongrate}
                    rate={details[4].rate}
                    datafromNewarrivalmini={datafromNewarrivalmini}
                  />{" "}
                </div>
                <div className="newarrivalmini11">
                  <Newarrivalmini
                    title={details[5].title}
                    img={details[5].img}
                    wrongrate={details[5].wrongrate}
                    rate={details[5].rate}
                    datafromNewarrivalmini={datafromNewarrivalmini}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
