import React from "react";
import "./RightComponent.css";

function RightComponent() {
  return (
    <div className="rightcomponent">
      <div className="rightcomponent__upperSection">
        <h2>Sign in for the best experience</h2>
        <button>Sign in securely</button>
      </div>
      <div className="rightcomponent__lowerSection">
        <img
          className="rightcomponent__lowersection__img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default RightComponent;
