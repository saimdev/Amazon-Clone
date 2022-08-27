import React from "react";
import Category from "./Category";
import RightComponent from "./RightComponent";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt="banner1"
        />
        <div className="home__row">
          <Category name="Gaming accessories" />
          <Category name="Shop By Category" />
          <Category name="Get fit at home" />
          <RightComponent />
          {/* <Category name="Small Tabs"/> */}
          {/* <Product/> */}
        </div>
        <div className="home__row">
          <Category name="Back to school" />
          <Category name="Health & Personal Care" />
          <Category name="Deal of the Day" />
          <Category name="Electronics" />
        </div>
        <div className="home__row">
          <Category name="Shop backpacks" />
          <Category name="Shop Laptops & Tablets" />
          <Category name="Create with strip lights" />
          <Category name="For your Fitness Needs" />
        </div>
        <div className="home__row">
          <Category name="Shop activity trackers" />
          <Category name="Shop school essentials" />
          <Category name="Gaming merchandise" />
          <Category name="Shop Pet supplies" />
        </div>
      </div>
    </div>
  );
}

export default Home;
