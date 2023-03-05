import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container ">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div className="col mb-3">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              
            </a>
            <p className="">
              <img src="/assets/logo.png" alt="" />
            </p>
            <div className="mb-3"><span>Got questions? Call us 24/7!</span></div>
            <div>03 111 666 144 0317 1777015.</div>
            <div className="pb-2"><span>Contact info </span>info@winstore.pk</div>
            <div >
            <img src="/footericon.png" alt="" />
            </div>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h4>Trending</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h4>Information</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h4>Customer Care</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  About
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <div className="bottomfooter">
        <div className="row">
        <div className="col-md-1"></div>
          <div className="col-md-4">© 2021 Winstore. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
