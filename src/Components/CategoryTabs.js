import React, { useState, useEffect } from 'react'
import './CategoryTabs.css'

function CategoryTabs(props){
    const [imageURL, setImageUrl]=useState("");
    function checkProps(){
        if(props.name==="Headsets"){
            setImageUrl("https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg")
        }
        else if(props.name==="Keyboards"){
           setImageUrl("https://m.media-amazon.com/images/I/81dLH5W903L._AC_UY218_.jpg")
        }
        else if(props.name==="Computer mice"){
            setImageUrl("https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UY218_.jpg")
         }
         else if(props.name==="Chairs"){
            setImageUrl("https://m.media-amazon.com/images/I/71NepjXgXVS._AC_UL320_.jpg")
         }
         else if(props.name==="Computers & Accessories"){
            setImageUrl("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg")
         }
         else if(props.name==="Video Games"){
            setImageUrl("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg")
         }
         else if(props.name==="Baby"){
            setImageUrl("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg")
         }
         else if(props.name==="Toy & Games"){
            setImageUrl("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg")
         }
         else if(props.name==="Notebooks"){
            setImageUrl("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/XCM_CUTTLE_1459465_2525805_186x116_en_US._SY116_CB630079578_.jpg")
         }
         else if(props.name==="Accessories"){
            setImageUrl("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/XCM_CUTTLE_1459465_2525808_186x116_en_US._SY116_CB630079578_.jpg")
         }
         else if(props.name==="Food storage"){
            setImageUrl("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/XCM_CUTTLE_1459465_2525806_186x116_en_US._SY116_CB630079578_.jpg")
         }
         else if(props.name==="Pencils"){
            setImageUrl("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/XCM_CUTTLE_1459465_2525807_186x116_en_US._SY116_CB630079578_.jpg")
         }
         else if(props.name==="Apparel"){
            setImageUrl("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg")
         }
         else if(props.name==="Hats"){
            setImageUrl("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg")
         }
         else if(props.name==="Action figures"){
            setImageUrl("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg")
         }
         else if(props.name==="Mugs"){
            setImageUrl("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg")
         }
    }

    useEffect(() =>{
        checkProps();
    });

    return (
        <div className='categorytabs'>
            <img className="category__image" src={imageURL}
            alt="" />
            <p className="category__info">{props.name}</p>
        </div>

    );
}

export default CategoryTabs;