import React from "react";
import Product from "./Product";

function ProductPage() {
  return (
    <div className="productpage">
      <Product
        id="1"
        title="Thermaltake LCGS Avalanche i360T AIO Liquid Cooled CPU Gaming Desktop (Intel® Core™ i5-12600KF, 32GB DDR5 5200Mhz, NVIDIA® GeForce RTX™ 3060 Ti, 1TB NVMe M.2, WiFi, Win10 Home) D3AV-Z690-36T-LCS"
        price={300}
        image="https://images-na.ssl-images-amazon.com/images/I/81xZJWt64FL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
      />
      <Product
        id="2"
        title="SENZER SG500 Surround Sound Pro Gaming Headset with Noise Cancelling Microphone - Detachable Memory Foam Ear Pads - Portable Foldable Headphones for PC, PS4, PS5, Xbox One, Switch"
        price={200}
        image="https://m.media-amazon.com/images/I/71EHw68EScL._AC_UY218_.jpg"
      />
    </div>
  );
}

export default ProductPage;
