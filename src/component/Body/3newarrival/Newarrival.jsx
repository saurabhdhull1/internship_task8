import "./Newarrival.scss";
import Newarrivalmini from "./Newarrivalmini";
import React, { Component } from "react";

export default class Newarrival extends Component {
  render() {
    const details = [
      {
        title: "Samsung 40N5300...",
        img: "/assets/b1.png",
        wrongrate: "RS 50.000",
        rate: "RS 56.000",
      },
      {
        title: "Samsung Automatic.. ",
        img: "/assets/b2.png",
        wrongrate: "RS 1.10.000",
        rate: "RS 1.00.000",
      },
      {
        title: "Haier HSU-12H..",
        img: "/assets/b3.png",
        wrongrate: "RS 76.000",
        rate: "RS 70.000",
      },
      {
        title: "Anex Roti Maker ..",
        img: "/assets/b4.png",
        wrongrate: "RS 70.000",
        rate: "RS 60.000",
      },
      {
        title: "Gree GS-12FITH..",
        img: "/assets/b5.png",
        wrongrate: "RS 86.000",
        rate: "RS 80.000",
      },
      {
        title: "Gree Air Conditioner..",
        img: "/assets/b6.png",
        wrongrate: "RS 1.10.000",
        rate: "RS 1.00.000",
      },
    ];

    // cart data from Newarrivalmini
    const datafromNewarrivalmini = ({ title, img, wrongrate, rate }) => {
      this.props.datafromNewarrival({ title, img, wrongrate, rate })
    };
    return (
      <div className="newarrival">
        <div className="newarrivalTop">
          <div>
            <h1>
              <span>New</span> Arrivals
            </h1>
          </div>
          <div>
            <img src="/assets/timer.png" alt="" />
          </div>
        </div>

        {/* component */}

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
    );
  }
}
