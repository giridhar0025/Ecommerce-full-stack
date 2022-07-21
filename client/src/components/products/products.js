import React, { useState, useEffect } from "react";
import "./product.css";
import axios from "axios";
import Footer from '../footer/footer'


const Products = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://ecommerce-backend-v1.herokuapp.com/item",
    })
      .then((data) => {
        //  console.log(data.data.item[0].items)
        setProduct(data.data.item[0].items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(products[0])

  const handBuyNow = (item) => { };

  const handAddToCart = (data) => {
    const payLoad = {
      itemData: data
    }
    console.log(JSON.stringify(data))
    const authorization = localStorage.getItem("authorization")
    fetch("https://ecommerce-backend-v1.herokuapp.com/cart/add", {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: {
        authorization: authorization,
        "Content-Type": "application/json"
      }
    }).then((data) => data.json()).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  };



  return (
    <>
     <hr class="solid"></hr>
    <div className="amazing-offers">
    <span class="material-symbols-outlined animated-arrow">arrow_forward_ios</span>
      <span className="amazing-offer-span">Amazing Offers</span>
    </div>
    <hr class="solid"></hr>
      <div class="row product-card-bt">
        <div class="col product-card-column">
          {products.map((data) => {
            return (
              <>
                <div className="product-card">
                  <div className="product-image">
                    <img className="product-img" src={data.item_image} alt="" />
                  </div>
                  <div className="product-details">
                    <div className="detail product-name">
                      <p
                        style={{fontWeight: "600" }}
                        className="product-text  text-truncate text-wrap"
                      >
                        <a href={data.item_link}>{data.item_name}</a>
                      </p>
                    </div>
                    <div className="detail">
                      <p
                        style={{ fontSize: "1em", fontWeight: "700" }}
                        className="product-price"
                      >
                        Price : ${data.item_price}
                      </p>
                    </div>
                    <div className="detail ">
                      <p
                        style={{ fontSize: "1em", fontWeight: "400" }}
                        className="product-reviews text-truncate"
                      >
                        {data.item_reviews}
                      </p>
                    </div>
                    <div className="detail">
                      <p
                        style={{ fontSize: "1em", fontWeight: "400" }}
                        className="product-discount"
                      >
                        <img
                          className="discount"
                          alt=""
                          src="./Assets/discount.png"
                        />{" "}
                        {data.offer}
                      </p>
                    </div>
                    <div className="product-btn">
                      <button
                        onClick={() => {
                          handBuyNow(data);
                        }}
                        className="buy-now btn btn-secondary"
                      >
                        Buy Now
                      </button>
                      <button
                        onClick={() => {
                          handAddToCart(data);
                        }}
                        className="add-cart btn btn-secondary"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div>
      <div className="last-container">
       <div className="last-container-div-row row w-100 h-100">
         <div className="last-container-div-col col">
          <img className="image" src="https://i5.walmartimages.com/dfw/4ff9c6c9-176c/k2-_2068d5d6-d1ec-4216-ba8f-5506770163b4.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF" alt="something"/>
          <h5>From our communities</h5>
          <span>Supporting businesses that create local jobs & products you love.</span>
          <div className="shop-now-btn">
          <button className="btn btn-secondary">Shop now</button>
         </div>
         </div>
         <div className="last-container-div-col col">
          <img className="image" src="https://i5.walmartimages.com/dfw/4ff9c6c9-ac19/k2-_9c0f9a98-cb57-4cff-89bd-37d9c7eef53c.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF" alt="something"/>
          <h5>Build for Better</h5>
          <span>Find products that support where  we all live, work & thrive.*</span>
          <div className="shop-now-btn">
          <button className="btn btn-secondary">Shop now</button>
         </div>
         </div>
         
       </div>
       </div>
      </div>
      <Footer/>
    </>
  );
};

export default Products;
