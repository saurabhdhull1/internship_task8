import "./Bestdeal.scss";
import React, { Component } from 'react'

export default class Bestdeal extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row bestdeal">
        <div className="col-md-12 bestdeal1">
          <h1>
            <span>Best </span>Deals
          </h1>
        </div>
        <div className="bestdeal2">
          <div>
            <img src="/assets/d1.png" alt="" />
          </div>
          <div>
            <img src="/assets/d2.png" alt="" />
          </div>
          <div>
            <img src="/assets/d3.png" alt="" />
          </div>
        </div>
      </div>
      
    </div>
    )
  }
}

