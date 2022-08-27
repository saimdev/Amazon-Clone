import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import flag from "../images/flag.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <LocationOnOutlinedIcon className="header__locationIcon" />
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOn">Deliver to</span>
          <div className="header__optionLineTwo">Pakistan</div>
        </div>
      </div>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOn">English</span>
          <span className="header__optionLineTwo">
            <img src={flag} className="header__flagIcon" alt="" />
          </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOn">Hello, Sign In</span>
          <span className="header__optionLineTwo">Account & Lists</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOn">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__optionBasket">
          <Link to="/checkout">
            <AddShoppingCartIcon className="header__cartIcon" />
          </Link>
          <span className="header__optionLineTwo count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
