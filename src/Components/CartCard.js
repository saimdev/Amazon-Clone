import React from "react";
import "./CartCard.css";
import {useStateValue} from "./StateProvider"

function CartCard({id, title, image, price}) { 
  const [{basket}, dispatch] = useStateValue()

  const removeFromCart = (e)=>{
    e.preventDefault();
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  }
  return (
    <div className="cartcard">
      <div className="cartcard__left">
        <img
          className="cardcart__image"
          src={image}
          alt=""
        />
        <div className="cartcard__lower">
          <div className="cartcard__title">
            <p>{title}</p>
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
            <button className="cartcard__quantity">Qty: 1</button>
            <button onClick={removeFromCart} className="cartcard__delete__button"><a className="cartcard__configuration__delete" href=""><small>Delete</small></a></button>
            <a className="cartcard__configuration__save" href=""><small>Save for later</small></a>
            <a className="cartcard__configuration__compare" href=""><small>Compare with similar items</small></a>
          </div>
        </div>
      </div>
      <div className="cartcard__right">
        <strong>{"$"+price}</strong>
      </div>
    </div>
  );
}

export default CartCard;
