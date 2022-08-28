import React from "react";
import SubTotal from "./SubTotal";
import CartCard from "./CartCard"
import "./Checkout.css";

function Checkout() {
    const style = {
        marginLeft: "4px",
      };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__title">
          <p className="checkout__title__p">Shopping Cart</p>
        <p className="checkout__title__price">Price</p>
        </div>
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        
        <div className="checkout__left__footer">
          <p>
            Subtotal (2 items):
            <strong style={style}>$15.29</strong>
          </p>
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal payValue="50000" length="2" />
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
