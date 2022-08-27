import React, { useEffect, useState } from "react";
import CategoryTabs from "./CategoryTabs";
import "./Category.css";

function Category(props) {
  const [divStyle, setDivStyle] = useState("none");
  const [imageURL, setImageUrl] = useState("");
  const style = {
    display: divStyle,
  };
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");
  const [category3, setCategory3] = useState("");
  const [category4, setCategory4] = useState("");
  const [hyperLink, setHyperLink] = useState("");

  function checkProps() {
    if (props.name === "Gaming accessories") {
      setCategory1("Headsets");
      setCategory2("Keyboards");
      setCategory3("Computer mice");
      setCategory4("Chairs");
      setHyperLink("See More");
    } else if (props.name === "Shop By Category") {
      setCategory1("Computers & Accessories");
      setCategory2("Video Games");
      setCategory3("Baby");
      setCategory4("Toy & Games");
      setHyperLink("Shop Now");
    } else if (props.name === "Back to school") {
      setCategory1("Notebooks");
      setCategory2("Accessories");
      setCategory3("Food storage");
      setCategory4("Pencils");
      setHyperLink("Shop Now");
    } else if (props.name === "Gaming merchandise") {
      setCategory1("Apparel");
      setCategory2("Hats");
      setCategory3("Action figures");
      setCategory4("Mugs");
      setHyperLink("See More");
    } else if (props.name === "Dresses") {
      setDivStyle("flex");
      setHyperLink("Shop Now");
      setImageUrl(
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
      );
    } else if (props.name === "Health & Personal Care") {
      setDivStyle("flex");
      setHyperLink("Shop Now");
      setImageUrl(
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
      );
    } else if (props.name === "Electronics") {
      setDivStyle("flex");
      setHyperLink("See more");
      setImageUrl(
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
      );
    } else if (props.name === "Get fit at home") {
      setDivStyle("flex");
      setHyperLink("Explore Now");
      setImageUrl(
        "https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
      );
    } else if (props.name === "Shop backpacks") {
      setDivStyle("flex");
      setHyperLink("See more");
      setImageUrl(
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/Fuji_dash_BTS_backpack_1X._SY304_CB630082004_.jpg"
      );
    } else if (props.name === "Shop Laptops & Tablets") {
      setDivStyle("flex");
      setHyperLink("See more");
      setImageUrl(
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
      );
    } else if (props.name === "Create with strip lights") {
      setDivStyle("flex");
      setHyperLink("Shop Now");
      setImageUrl(
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
      );
    } else if (props.name === "For your Fitness Needs") {
      setDivStyle("flex");
      setHyperLink("Shop Now");
      setImageUrl(
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
      );
    } else if (props.name === "Deal of the Day") {
      setDivStyle("flex");
      setHyperLink("See all deals");
      setImageUrl(
        "https://m.media-amazon.com/images/I/21wIzyVr1UL._AC_SY230_.jpg"
      );
    } else if (props.name === "Shop activity trackers") {
      setDivStyle("flex");
      setHyperLink("Shop Now");
      setImageUrl(
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
      );
    } else if (props.name === "Shop school essentials") {
      setDivStyle("flex");
      setHyperLink("See More");
      setImageUrl(
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/Fuji_dash_BTS_1X._SY304_CB630084689_.jpg"
      );
    } else if (props.name === "Shop Pet supplies") {
      setDivStyle("flex");
      setHyperLink("See More");
      setImageUrl(
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"
      );
    }
  }

  useEffect(() => {
    checkProps();
  });

  return (
    <div className="category">
      <div className="category__header">
        <h2>{props.name}</h2>
      </div>
      <div className="category__body">
        <div className="category__upperSection">
          <div className="body__row">
            <CategoryTabs name={category1} />
            <CategoryTabs name={category2} />
          </div>
        </div>
        <div className="category__lowerSection">
          <div className="body__row">
            <CategoryTabs name={category3} />
            <CategoryTabs name={category4} />
          </div>
        </div>
      </div>
      <div className="category__footer">
        <a href="#home">{hyperLink}</a>
      </div>
      <div className="category__singleSection" style={style}>
        <img src={imageURL} alt="" />
      </div>
    </div>
  );
}

export default Category;
