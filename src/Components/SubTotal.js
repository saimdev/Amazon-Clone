import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";

function SubTotal() {
  const style = {
    marginLeft: "4px",
  };
  return (
    <div className="subtotal">
      <CurrencyFormat   
        renderText={(value) => (
          <>
            <p>
              Subtotal (2 items):
              <strong style={style}>$15.29</strong>
            </p>
            <div className="subtotal__gift">
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </div>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default SubTotal;
