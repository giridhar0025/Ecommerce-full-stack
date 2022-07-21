import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <>
    <footer class="py-3 ">
        <hr/>
    <ul class="nav justify-content-center border-bottom  mb-3">
      <li class="nav-item"></li>
      <li class="nav-item"><a href="/" class="nav-link px-2"> <img alt="something" className="social-logo" src="./Assets/logo-pinterest.svg"/></a></li>
      <li class="nav-item"><a href="/" class="nav-link px-2"> <img alt="something" className="social-logo" src="./Assets/logo-instagram.svg"/></a></li>
      <li class="nav-item"><a href="/" class="nav-link px-2"> <img alt="something" className="social-logo" src="./Assets/logo-facebook.svg"/></a></li>
      <li class="nav-item"><a href="/" class="nav-link px-2"> <img alt="something" className="social-logo" src="./Assets/logo-youtube.svg"/></a></li>
    </ul>   
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/" class="nav-link px-2 text-muted font-weight-bold">Home</a></li>
      <li class="nav-item"><a href="/cart" class="nav-link px-2 text-muted font-weight-bold">Cart</a></li>
      <li class="nav-item"><a href="/pricing" class="nav-link px-2 text-muted font-weight-bold">Pricing</a></li>
      <li class="nav-item"><a href="/FAQs" class="nav-link px-2 text-muted font-weight-bold">FAQs</a></li>
      <li class="nav-item"><a href="/about" class="nav-link px-2 text-muted font-weight-bold">About</a></li>
    </ul>
    <div className="footer-logo-div"> 
        <img alt="something" className="footer-logo" src="./Assets/logo.svg"/>
    </div>
    <p class="text-center text-muted">© 2022 Walmart, Inc</p>
    </footer>
    </>
  )
}

export default Footer