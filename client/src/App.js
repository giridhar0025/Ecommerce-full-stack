import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Home from './components/home/home';
import Cart from './components/cart/cart';
import Orders from './components/orders/orders';
import Protected from './components/protectedrotes/protected'


const App = () => {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/user/signup' element={<Signup/>}></Route>
        <Route path='/user/login' element={<Login/>}></Route>
        <Route path='/cart' element={<Protected><Cart/></Protected>}></Route>
        <Route path='/orders' element={<Protected><Orders/></Protected>}></Route>
       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App