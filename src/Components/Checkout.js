import React from "react";
import SubTotal from "./SubTotal";
import CartCard from "./CartCard"
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Checkout() {
  const [{basket}, dispatch] = useStateValue();
    const style = {
        marginLeft: "4px",
      };
      console.log(getBasketTotal(basket))
  return (
    
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__title">
          <p className="checkout__title__p">Shopping Cart</p>
        <p className="checkout__title__price">Price</p>
        </div>
        
        {
          basket.map(item=>(
            <CartCard id={item.id} image={item.image} price={item.price} title={item.title}/>
          ))
        }
        
        <div className="checkout__left__footer">
          <p>
            Subtotal ({basket.length} items):
            <strong style={style}>{"$"+getBasketTotal(basket)}</strong>
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
