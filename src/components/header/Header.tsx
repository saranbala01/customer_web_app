
import logo from "../../assets/logo.png";
import person from "../../assets/person.svg";
import notification from "../../assets/notification.png";
import cart from "../../assets/cart.png";
import location from "../../assets/location.png";
import search from "../../assets/search.png";
import downArrow from "../../assets/down-arrow.svg";
import * as React from "react";

import "./Header.css";

const Header: React.FC = () => {
  return (
    <>
      <div className="col-12 header d-flex justify-content-between align-items-center  ">
        <div className="col-5 d-flex justify-content-around align-items-center ">
          <img src={logo} alt="Fresh & Local" />
          <div>
            <a href="#">
              {" "}
              <span>Shop By Category</span>
              <img title="downarrow" src={downArrow} />
            </a>
          </div>
          <div>
            <a href="">Explore Farms</a>
          </div>
        </div>

        <div className="col-5 d-flex justify-content-evenly">
          <div className="col-2">
            <a href="#">
              <img src={search} alt="search" />
              Search
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <img src={location} alt="location" />
              Handiya 52700
            </a>
          </div>
          <div className="col-1">
            <a href="#">
              <img src={person} alt="Person" />
            </a>
          </div>
          <div className="col-1">
            <a href="#">
              <img src={notification} alt="notification" />
            </a>
          </div>
          <div className="col-1">
            <a href="#">
              <img src={cart} alt="cart" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
