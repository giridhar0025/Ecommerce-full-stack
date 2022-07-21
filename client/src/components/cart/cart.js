import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './cart.css';
import Navbar from '../navbar/navbar'


const Cart = () => {
  const authorization = localStorage.getItem('authorization')

  const [cartItems, setCartItems] = useState([])

  const [deleteState, setDeleteState] = useState(false)

  useEffect(() => {
    fetch("https://ecommerce-backend-v1.herokuapp.com/cart", {
      headers: {
        authorization: authorization
      }
    }).then((res) => res.json()).then((data) => {
      setCartItems(data.cartData)
    })
  }, [authorization, deleteState])


  const handleSubtotal = () => {
    let subtotal = 0
    cartItems.map((item) => {
      subtotal += parseInt(item.item_price)
      return {}
    })
    return subtotal
  }
  let total = handleSubtotal()

  const handleCartItemRemove = (item) => {
    // console.log(data)
    const authorization = localStorage.getItem("authorization")
    fetch(`https://ecommerce-backend-v1.herokuapp.com/cart/remove/${item._id}`, {
      method: "DELETE",
      headers: {
        authorization: authorization,
        "Content-Type": "application/json"
      }
    }).then((data) => { data.json() }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    let currentCartState = () => {
      if (deleteState) {
        setDeleteState(false)
      } else {
        setDeleteState(true)
      }
      return
    }
    currentCartState()
  };


  return (
    <>
      <Navbar />
      <div className="cart-container">


        <div className="cart-container-left">
          {
            authorization.length ?
              <section className="card-section" >

                <div className="cart-card-container">
                  <div>

                  </div>
                  {
                    cartItems.map((item) => {
                      return (
                        <div className="cart-card">
                          <div className="cart-card-allDetails">
                            <div className="cart-image">
                              <img className="cart-img" src={item.item_image} alt="" />
                            </div>
                            <div className="cart-component-details">
                              <div className="cart product-name">
                                <p style={{ fontSize: "1em", fontWeight: "600" }} className="text-truncate text">
                                  <a href={item.item_link}>{item.item_name}</a>
                                </p>
                              </div>
                              <div className="cart product-price">
                                <p style={{ fontSize: "1.2em", fontWeight: "700" }} className="text-truncate text">
                                  Price : ${item.item_price}
                                </p>
                              </div>
                              <div className="cart product-reviews">
                                <p style={{ fontSize: "1em", fontWeight: "400" }} className=" text-truncate text">
                                  {item.item_reviews}
                                </p>
                              </div>
                              <div className="cart remove-from-cart">
                                <button onClick={() => { handleCartItemRemove(item) }} className="btn btn-secondary">Remove</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </section>
              :
              <section>
                <div>
                  <h3>User Not LoggedIn please login or signup</h3>
                  <Link to="/user/login">Login</Link>
                  <br />
                  <Link to="/user/signup">Signup</Link>
                </div>
              </section>
          }
        </div>
        <div className="cart-container-right">
          <div className="cart-checkout">
            <div className="cart-checkout-details">
              <span>Subtotal $ {total}</span>
            </div>
            <div className="cart-checkout-details">
              <span>Estimated total : $ {total + 10}</span>
            </div>

          </div>
          <div>
            <button className="btn btn-secondary">Checkout</button>
          </div>
        </div>



      </div>
    </>
  )
}

export default Cart