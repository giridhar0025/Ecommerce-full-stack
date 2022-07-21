import React  from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

  const userEmail = localStorage.getItem("email")

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem("authorization", "")
        localStorage.setItem("email", "")
        navigate("/")
    }



  

 
 
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="/">
          <img className="logo-img" src=".\Assets\logo.svg" alt="logo"></img>
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                <span class="material-symbols-outlined">shopping_cart</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                <span class="material-symbols-outlined">contact_support</span>
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input style={{width: "350px"}}
                className="form-control mr-sm-2 "
                type="search"
                placeholder="Search Products"
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
            <div className="nav-btns-false">
              {
                userEmail.length ? 
                <section className="account-section">
                  <div className="account-div">
                   <a className="nav-link" href="/account">
                   <span class="material-symbols-outlined">account_circle</span>
                   </a>
                  </div>
                  <div className="user-email account-div">
                  {userEmail}
                  </div>
                  <div className="account-div">
                  <Link  onClick={handleLogout} style={{display: "inline-block"}} to={{pathname:"/"}} type="button" class="btn btn-outline-secondary">
                     Logout
                  </Link>
                  </div>   
                </section> : 
                <section className="account-section-general">
                     <div className="nav-btns-true">
                     <Link to={{pathname:"/user/login"}} type="button" class="btn btn-outline-secondary">
                           Login
                     </Link>
                     <Link to={{pathname:"/user/signup"}} type="button" class="btn btn-outline-secondary">
                           Register
                     </Link>
                     </div>
                </section>
              }
            
            
           
            </div>
          </div>
          </nav>
         

    </>
  )
}

export default Navbar