import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      On: true,
    };
  }
  render() {
    const menu = () => {
      if (this.state.On) {
        document.querySelector(".mobnavbar").style.display = "flex";
        this.setState({ On: false });
      } else {
        document.querySelector(".mobnavbar").style.display = "none";
        this.setState({ On: true });
      }
    };
    return (
      <>
        {/* Main navbar*/}
        <div className="navbar">
          <div>
            <Link to="/">
              <img src="/assets/logo.png" alt="" />
            </Link>
          </div>
          <div className="menu" onClick={menu}>
            <img src="/assets/menu.png" alt="" />
          </div>
          <div className="search">
            <div class="dropdown">
              <button class="dropbtn">All catagories</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <input type="text" placeholder="Search for products" />
          </div>
          <div>
            <div>
              <svg
                width="17"
                height="10"
                viewBox="0 0 17 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.97546 5.80929H10.1402V7.34396H5.15729H4.99863C4.75758 6.68244 4.12339 6.2089 3.37975 6.2089C2.64742 6.2089 2.02046 6.66887 1.77176 7.31454C1.46537 7.22605 1.24091 6.94412 1.24091 6.60906V6.54361C1.24078 6.1379 1.56987 5.80929 1.97546 5.80929ZM4.60461 7.76063C4.60461 8.46709 4.0294 9.04201 3.32237 9.04201C2.61595 9.04201 2.0408 8.46705 2.0408 7.76063C2.0408 7.05357 2.61595 6.47836 3.32237 6.47836C4.0294 6.47836 4.60461 7.05354 4.60461 7.76063ZM4.21227 7.76063C4.21227 7.26974 3.81336 6.87064 3.32234 6.87064C2.83147 6.87064 2.43273 7.2699 2.43273 7.76063C2.43273 8.25099 2.83167 8.64992 3.32234 8.64992C3.81349 8.65005 4.21227 8.25095 4.21227 7.76063ZM14.6303 7.76063C14.6303 8.46709 14.0551 9.04201 13.3484 9.04201C12.6417 9.04201 12.0668 8.46705 12.0668 7.76063C12.0668 7.05357 12.6417 6.47836 13.3484 6.47836C14.0551 6.47836 14.6303 7.05354 14.6303 7.76063ZM14.2384 7.76063C14.2384 7.26974 13.8391 6.87064 13.3486 6.87064C12.858 6.87064 12.4591 7.2699 12.4591 7.76063C12.4591 8.25099 12.8584 8.64992 13.3486 8.64992C13.8391 8.65005 14.2384 8.25095 14.2384 7.76063ZM16.5 4.88683V6.97675C16.5 7.11194 16.3899 7.22168 16.2552 7.22168H14.9743C14.7035 6.62494 14.1022 6.2089 13.4057 6.2089C12.7089 6.2089 12.1081 6.62506 11.8369 7.22168H10.9728C10.8377 7.22168 10.7276 7.11194 10.7276 6.97675V1.96417C10.7276 1.82875 10.8377 1.71924 10.9728 1.71924H14.1977C14.3327 1.71924 14.5385 1.76424 14.6873 1.96417L16.5 4.88683ZM15.3571 4.24978L14.255 2.4211C14.1698 2.26369 14.065 2.17655 13.6915 2.17655H11.6912C11.5561 2.17655 11.4464 2.28587 11.4464 2.4211V4.24978C11.4464 4.38539 11.5561 4.49487 11.6912 4.49487H15.1118C15.2474 4.49487 15.3571 4.38539 15.3571 4.24978ZM16.3122 6.22545C16.3122 6.09935 16.2098 5.99682 16.0835 5.99682C15.9569 5.99682 15.8547 6.09919 15.8547 6.22545V6.65814C15.8547 6.78446 15.9569 6.88697 16.0835 6.88697C16.2099 6.88697 16.3122 6.78479 16.3122 6.65814V6.22545ZM0.5 5.37059H10.1402V0.957886H0.5V5.37059Z"
                  fill="white"
                />
              </svg>{" "}
              Orders & Tracking
            </div>
            <div>
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="15"
                  height="10"
                  fill="url(#pattern0)"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_102_633"
                      transform="matrix(0.00364299 0 0 0.00546448 -0.000910747 0)"
                    />
                  </pattern>
                  <image
                    id="image0_102_633"
                    width="275"
                    height="183"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>{" "}
              Delivery within India
            </div>
            <div>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.755 3.99961C2.00858 3.28281 2.43957 2.64195 3.00773 2.13683C3.5759 1.6317 4.26273 1.27877 5.00414 1.11098C5.74555 0.943178 6.51738 0.965979 7.2476 1.17725C7.97781 1.38852 8.64263 1.78138 9.18 2.31916L11.5 4.49974M0.5 6.50026L2.82 8.68084C3.35737 9.21862 4.02219 9.61148 4.7524 9.82275C5.48262 10.034 6.25445 10.0568 6.99586 9.88903C7.73727 9.72123 8.4241 9.3683 8.99227 8.86317C9.56043 8.35805 9.99142 7.71719 10.245 7.00039"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              &nbsp; Return
            </div>
          </div>
          <div>
            <div>Call Us Now</div>
            <div>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.72727 9.1218V7.88064C1.72727 3.5947 5.21412 0.10791 9.5 0.10791C13.7859 0.10791 17.2727 3.5947 17.2727 7.88064V9.1218C18.3208 9.91041 19 11.1644 19 12.574C19 14.955 17.0629 16.8922 14.6818 16.8922C14.2049 16.8922 13.8182 16.5055 13.8182 16.0285V9.11944C13.8182 8.64248 14.2049 8.2558 14.6818 8.2558C14.9775 8.2558 15.2663 8.2858 15.5455 8.34274V7.88069C15.5455 4.54723 12.8335 1.83524 9.5 1.83524C6.16654 1.83524 3.45455 4.54723 3.45455 7.88069V8.34274C3.73367 8.2858 4.02247 8.2558 4.31818 8.2558C4.79514 8.2558 5.18182 8.64248 5.18182 9.11944V16.0285C5.18182 16.5055 4.79514 16.8922 4.31818 16.8922C1.93714 16.8922 0 14.955 0 12.574C0 11.1643 0.679163 9.91041 1.72727 9.1218Z"
                  fill="white"
                />
              </svg>
              &nbsp; +011 5827918
            </div>
            <div>Sign In</div>
          </div>
          <div className="navicon">
            <div>
              <Link to="/profile">
                <img src="/assets/user.png" alt="" />
              </Link>
            </div>
            <div>
              <img src="/assets/heart.png" alt="" />
            </div>
            <div>
              <Link to="/cart">
                <img src="/assets/cart.png" alt="" />
              </Link>
              <sup className="navcount">{this.props.cartItemscount}</sup>
            </div>
          </div>
        </div>

        {/* mobile navbar*/}
        <div className="mobnavbar">
          <div className="search">
            <input type="text" placeholder="Search for products" />
          </div>

          <div>
            <svg
              width="17"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.97546 5.80929H10.1402V7.34396H5.15729H4.99863C4.75758 6.68244 4.12339 6.2089 3.37975 6.2089C2.64742 6.2089 2.02046 6.66887 1.77176 7.31454C1.46537 7.22605 1.24091 6.94412 1.24091 6.60906V6.54361C1.24078 6.1379 1.56987 5.80929 1.97546 5.80929ZM4.60461 7.76063C4.60461 8.46709 4.0294 9.04201 3.32237 9.04201C2.61595 9.04201 2.0408 8.46705 2.0408 7.76063C2.0408 7.05357 2.61595 6.47836 3.32237 6.47836C4.0294 6.47836 4.60461 7.05354 4.60461 7.76063ZM4.21227 7.76063C4.21227 7.26974 3.81336 6.87064 3.32234 6.87064C2.83147 6.87064 2.43273 7.2699 2.43273 7.76063C2.43273 8.25099 2.83167 8.64992 3.32234 8.64992C3.81349 8.65005 4.21227 8.25095 4.21227 7.76063ZM14.6303 7.76063C14.6303 8.46709 14.0551 9.04201 13.3484 9.04201C12.6417 9.04201 12.0668 8.46705 12.0668 7.76063C12.0668 7.05357 12.6417 6.47836 13.3484 6.47836C14.0551 6.47836 14.6303 7.05354 14.6303 7.76063ZM14.2384 7.76063C14.2384 7.26974 13.8391 6.87064 13.3486 6.87064C12.858 6.87064 12.4591 7.2699 12.4591 7.76063C12.4591 8.25099 12.8584 8.64992 13.3486 8.64992C13.8391 8.65005 14.2384 8.25095 14.2384 7.76063ZM16.5 4.88683V6.97675C16.5 7.11194 16.3899 7.22168 16.2552 7.22168H14.9743C14.7035 6.62494 14.1022 6.2089 13.4057 6.2089C12.7089 6.2089 12.1081 6.62506 11.8369 7.22168H10.9728C10.8377 7.22168 10.7276 7.11194 10.7276 6.97675V1.96417C10.7276 1.82875 10.8377 1.71924 10.9728 1.71924H14.1977C14.3327 1.71924 14.5385 1.76424 14.6873 1.96417L16.5 4.88683ZM15.3571 4.24978L14.255 2.4211C14.1698 2.26369 14.065 2.17655 13.6915 2.17655H11.6912C11.5561 2.17655 11.4464 2.28587 11.4464 2.4211V4.24978C11.4464 4.38539 11.5561 4.49487 11.6912 4.49487H15.1118C15.2474 4.49487 15.3571 4.38539 15.3571 4.24978ZM16.3122 6.22545C16.3122 6.09935 16.2098 5.99682 16.0835 5.99682C15.9569 5.99682 15.8547 6.09919 15.8547 6.22545V6.65814C15.8547 6.78446 15.9569 6.88697 16.0835 6.88697C16.2099 6.88697 16.3122 6.78479 16.3122 6.65814V6.22545ZM0.5 5.37059H10.1402V0.957886H0.5V5.37059Z"
                fill="white"
              />
            </svg>{" "}
            Orders & Tracking
          </div>
          <div>
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="10"
                fill="url(#pattern0)"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_102_633"
                    transform="matrix(0.00364299 0 0 0.00546448 -0.000910747 0)"
                  />
                </pattern>
                <image
                  id="image0_102_633"
                  width="275"
                  height="183"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>{" "}
            Delivery within India
          </div>
          <div>
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.755 3.99961C2.00858 3.28281 2.43957 2.64195 3.00773 2.13683C3.5759 1.6317 4.26273 1.27877 5.00414 1.11098C5.74555 0.943178 6.51738 0.965979 7.2476 1.17725C7.97781 1.38852 8.64263 1.78138 9.18 2.31916L11.5 4.49974M0.5 6.50026L2.82 8.68084C3.35737 9.21862 4.02219 9.61148 4.7524 9.82275C5.48262 10.034 6.25445 10.0568 6.99586 9.88903C7.73727 9.72123 8.4241 9.3683 8.99227 8.86317C9.56043 8.35805 9.99142 7.71719 10.245 7.00039"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            &nbsp; Return
          </div>

          <div>Call Us Now</div>
          <div>
            <svg
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.72727 9.1218V7.88064C1.72727 3.5947 5.21412 0.10791 9.5 0.10791C13.7859 0.10791 17.2727 3.5947 17.2727 7.88064V9.1218C18.3208 9.91041 19 11.1644 19 12.574C19 14.955 17.0629 16.8922 14.6818 16.8922C14.2049 16.8922 13.8182 16.5055 13.8182 16.0285V9.11944C13.8182 8.64248 14.2049 8.2558 14.6818 8.2558C14.9775 8.2558 15.2663 8.2858 15.5455 8.34274V7.88069C15.5455 4.54723 12.8335 1.83524 9.5 1.83524C6.16654 1.83524 3.45455 4.54723 3.45455 7.88069V8.34274C3.73367 8.2858 4.02247 8.2558 4.31818 8.2558C4.79514 8.2558 5.18182 8.64248 5.18182 9.11944V16.0285C5.18182 16.5055 4.79514 16.8922 4.31818 16.8922C1.93714 16.8922 0 14.955 0 12.574C0 11.1643 0.679163 9.91041 1.72727 9.1218Z"
                fill="white"
              />
            </svg>
            &nbsp; +011 5827918
          </div>
          <div>Sign In</div>

          <div className="navicon">
            <div>
              <Link to="/profile">
                <img src="/assets/user.png" alt="" />
              </Link>
            </div>
            <div>
              <img src="/assets/heart.png" alt="" />
            </div>
            <div>
              <Link to="/cart">
                <img src="/assets/cart.png" alt="" />
              </Link>
              <sup className="navcount">{this.props.cartItemscount}</sup>
            </div>
          </div>
        </div>

        {/* Navbar 2*/}
        <div className="navbar2">
          <div className="navbar21">
            <div>
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.364746"
                  width="13.2362"
                  height="1.53379"
                  fill="white"
                />
                <rect
                  y="5.73291"
                  width="13.2362"
                  height="1.53379"
                  fill="white"
                />
                <rect
                  y="11.1014"
                  width="13.2362"
                  height="1.53379"
                  fill="white"
                />
              </svg>{" "}
              Brouse By Category
            </div>
            <div>Home</div>
            <div>Easy Monthly Installments</div>
            <div>Shop by Brands</div>
            <div>Become a Vendor</div>
          </div>

          <div className="navbar22">
            <span>
              <svg
                width="11"
                height="23"
                viewBox="0 0 11 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99175 4.15292H11V0.654917C10.6535 0.60725 9.46196 0.5 8.07424 0.5C5.17874 0.5 3.19523 2.32142 3.19523 5.66908V8.75H0V12.6605H3.19523V22.5H7.11274V12.6614H10.1787L10.6654 8.75092H7.11182V6.05683C7.11274 4.92658 7.41705 4.15292 8.99175 4.15292Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 2.63092C21.1819 2.99231 20.3101 3.23185 19.4012 3.34815C20.3362 2.786 21.0499 1.90262 21.3854 0.837846C20.5136 1.36123 19.5511 1.73092 18.5254 1.93723C17.6976 1.04969 16.5179 0.5 15.2309 0.5C12.7339 0.5 10.7236 2.54092 10.7236 5.04292C10.7236 5.40292 10.7539 5.74908 10.8281 6.07862C7.0785 5.89446 3.76063 4.08477 1.53175 1.328C1.14262 2.00785 0.914375 2.786 0.914375 3.62369C0.914375 5.19662 1.71875 6.59092 2.91775 7.39815C2.19312 7.38431 1.48225 7.17246 0.88 6.83877C0.88 6.85262 0.88 6.87062 0.88 6.88862C0.88 9.09569 2.44337 10.9289 4.4935 11.3512C4.12637 11.4523 3.72625 11.5008 3.311 11.5008C3.02225 11.5008 2.73075 11.4842 2.45712 11.4232C3.0415 13.2218 4.69975 14.5442 6.6715 14.5871C5.137 15.7958 3.18863 16.5242 1.07938 16.5242C0.7095 16.5242 0.35475 16.5075 0 16.4618C1.99787 17.7592 4.36563 18.5 6.919 18.5C15.2185 18.5 19.756 11.5769 19.756 5.576C19.756 5.37523 19.7491 5.18139 19.7395 4.98892C20.6346 4.34923 21.3867 3.55031 22 2.63092Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.901 22.4532V22.4523H21.9065V14.4181C21.9065 10.4877 21.0604 7.46008 16.4655 7.46008C14.2566 7.46008 12.7743 8.67224 12.1691 9.82141H12.1052V7.82702H7.74857V22.4523H12.285V15.2104C12.285 13.3036 12.6465 11.4598 15.0078 11.4598C17.3344 11.4598 17.3691 13.6359 17.3691 15.3327V22.4532H21.901Z"
                  fill="white"
                />
                <path
                  d="M0.361511 7.82788H4.90344V22.4532H0.361511V7.82788Z"
                  fill="white"
                />
                <path
                  d="M2.6306 0.546753C1.17838 0.546753 0 1.72514 0 3.17735C0 4.62956 1.17838 5.83259 2.6306 5.83259C4.08281 5.83259 5.26119 4.62956 5.26119 3.17735C5.26028 1.72514 4.0819 0.546753 2.6306 0.546753V0.546753Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7103 6.99621C22.6591 5.83451 22.4713 5.03585 22.2021 4.3438C21.9245 3.60921 21.4974 2.95153 20.9378 2.4048C20.3911 1.84956 19.7291 1.41811 19.003 1.14483C18.307 0.875721 17.5125 0.687861 16.3508 0.636641C15.1804 0.581084 14.8088 0.568237 11.8404 0.568237C8.87205 0.568237 8.5005 0.581084 7.33446 0.632303C6.17276 0.683523 5.37411 0.87155 4.68222 1.14049C3.94747 1.41811 3.28979 1.84522 2.74306 2.4048C2.18782 2.95153 1.75654 3.61355 1.48309 4.33963C1.21398 5.03585 1.02612 5.83017 0.974898 6.99187C0.919341 8.16224 0.906494 8.53379 0.906494 11.5022C0.906494 14.4706 0.919341 14.8421 0.97056 16.0082C1.02178 17.1699 1.20981 17.9685 1.47892 18.6606C1.75654 19.3952 2.18782 20.0528 2.74306 20.5996C3.28979 21.1548 3.9518 21.5863 4.67789 21.8595C5.37411 22.1287 6.16843 22.3165 7.33029 22.3677C8.49616 22.4191 8.86788 22.4318 11.8363 22.4318C14.8047 22.4318 15.1762 22.4191 16.3423 22.3677C17.504 22.3165 18.3026 22.1287 18.9945 21.8595C20.4638 21.2915 21.6255 20.1298 22.1936 18.6606C22.4626 17.9644 22.6506 17.1699 22.7018 16.0082C22.753 14.8421 22.7659 14.4706 22.7659 11.5022C22.7659 8.53379 22.7616 8.16224 22.7103 6.99621ZM20.7415 15.9228C20.6944 16.9905 20.5151 17.5671 20.3656 17.9515C19.9982 18.904 19.2423 19.6599 18.2898 20.0273C17.9054 20.1768 17.3246 20.3562 16.261 20.403C15.1078 20.4544 14.762 20.4671 11.8448 20.4671C8.92761 20.4671 8.57741 20.4544 7.42839 20.403C6.36062 20.3562 5.78403 20.1768 5.39963 20.0273C4.92564 19.8521 4.4942 19.5745 4.144 19.2115C3.78096 18.8569 3.50334 18.4298 3.32816 17.9559C3.17867 17.5715 2.99932 16.9905 2.95244 15.9271C2.90105 14.7739 2.88837 14.4279 2.88837 11.5107C2.88837 8.59352 2.90105 8.24333 2.95244 7.09447C2.99932 6.0267 3.17867 5.45011 3.32816 5.06571C3.50334 4.59156 3.78096 4.16028 4.14834 3.80992C4.50271 3.44688 4.92981 3.16926 5.40397 2.99424C5.78837 2.84475 6.3693 2.6654 7.43273 2.61835C8.58592 2.56713 8.93194 2.55429 11.849 2.55429C14.7705 2.55429 15.1163 2.56713 16.2653 2.61835C17.3331 2.6654 17.9097 2.84475 18.2941 2.99424C18.7681 3.16926 19.1995 3.44688 19.5497 3.80992C19.9128 4.16445 20.1904 4.59156 20.3656 5.06571C20.5151 5.45011 20.6944 6.03088 20.7415 7.09447C20.7927 8.24766 20.8055 8.59352 20.8055 11.5107C20.8055 14.4279 20.7927 14.7696 20.7415 15.9228Z"
                  fill="white"
                />
                <path
                  d="M11.8405 5.88574C8.73982 5.88574 6.22406 8.40134 6.22406 11.5022C6.22406 14.6031 8.73982 17.1187 11.8405 17.1187C14.9414 17.1187 17.457 14.6031 17.457 11.5022C17.457 8.40134 14.9414 5.88574 11.8405 5.88574ZM11.8405 15.1455C9.82895 15.1455 8.19726 13.5139 8.19726 11.5022C8.19726 9.49046 9.82895 7.85895 11.8405 7.85895C13.8523 7.85895 15.4838 9.49046 15.4838 11.5022C15.4838 13.5139 13.8523 15.1455 11.8405 15.1455Z"
                  fill="white"
                />
                <path
                  d="M18.9904 5.66373C18.9904 6.38781 18.4033 6.97491 17.679 6.97491C16.9549 6.97491 16.3678 6.38781 16.3678 5.66373C16.3678 4.93948 16.9549 4.35254 17.679 4.35254C18.4033 4.35254 18.9904 4.93948 18.9904 5.66373Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
      </>
    );
  }
}
