import React from "react"
import "./Product.css"
import { useStateValue } from "./StateProvider";

function Product(){

    const [{basket}, dispatch] = useStateValue();
    const title = "Thermaltake LCGS Avalanche i360T AIO Liquid Cooled CPU Gaming Desktop (Intel® Core™ i5-12600KF, 32GB DDR5 5200Mhz, NVIDIA® GeForce RTX™ 3060 Ti, 1TB NVMe M.2, WiFi, Win10 Home) D3AV-Z690-36T-LCS"
    console.log('This is basket  >>> ', basket)
    const addToBasket = () =>{
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                title: title,
            }
        })
    }


    return(
        <div className="product">
            <div className="product__tab">
                <img src="https://images-na.ssl-images-amazon.com/images/I/81xZJWt64FL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt=""/>
                <div className="product__description">
                <h4>{title}</h4>
                <button onClick={addToBasket}>Add to basket</button>
                </div>
            </div>
        </div>
    );
}

export default Product;