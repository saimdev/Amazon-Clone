import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function SubTotal() {
  const[{basket}, dispatch] = useStateValue();
  const style = {
    marginLeft: "4px",
  };
  return (
    <div className="subtotal">
      <CurrencyFormat   
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong style={style}>{value}</strong>
            </p>
            <div className="subtotal__gift">
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </div>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default SubTotal;
