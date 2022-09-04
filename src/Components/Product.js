import React from "react"
import "./Product.css"
import { useStateValue } from "./StateProvider";

function Product({id, title, price, image}){
    console.log("Product Comp price", price)

    const [{basket}, dispatch] = useStateValue();
    console.log('This is basket  >>> ', basket)
    const addToBasket = () =>{
        //dispatch the item into the data layer
        
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            }
        })
        console.log(price)
    }


    return(
        <div className="product">
            <div className="product__tab">
                <img src={image} alt=""/>
                <div className="product__description">
                <h4>{title}</h4>
                <p>{price}</p>
                <button onClick={addToBasket}>Add to basket</button>
                </div>
            </div>
        </div>
    );
}

export default Product;