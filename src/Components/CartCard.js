import React from "react";
import "./CartCard.css";

function CartCard() {
  return (
    <div className="cartcard">
      <div className="cartcard__left">
        <img
          className="cardcart__image"
          src="https://images-na.ssl-images-amazon.com/images/I/51ooKjIzgGL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          alt=""
        />
        <div className="cartcard__lower">
          <div className="cartcard__title">
            <p>Jurassic World Dominion</p>
            <small>by Chris Pratt</small>
            <strong>DVD</strong>
            <small className="cartcard__stock__check">In Stock</small>
          </div>
          <div className="cartcard__details">
              {/* <br></br> */}
            <input type="checkbox" />
            <small>This is a gift</small>
            <a href="">Learn more</a>
          </div>
          <div className="cartcard__configuration">
            <button>Qty: 1</button>
            <a className="cartcard__configuration__delete" href=""><small>Delete</small></a>
            <a className="cartcard__configuration__save" href=""><small>Save for later</small></a>
            <a className="cartcard__configuration__compare" href=""><small>Compare with similar items</small></a>
          </div>
        </div>
      </div>
      <div className="cartcard__right">
        <strong>$19.96</strong>
      </div>
    </div>
  );
}

export default CartCard;
