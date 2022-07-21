import React from "react";
import "./home.css";
import Departments from '../departments/departments'
import Navbar from '../navbar/navbar' 

const Home = () => {
 
  return (
    <>
      <div className="main-container">
       <Navbar/>
       <div className="container">
       <div className="row w-100 h-100">
         <div className="col">
          <img className="image" src="/Assets/bag.png" alt=""/>
         </div>
         <div className="col">
         <div className="description column">
              <h1 style={{textAlign: "center", fontSize: "1.6em"}}>Free delivery from your store</h1>
              <ul className="list" style={{fontSize: "1.2em"}}>
                <li className="list-item"><span className="material-symbols-outlined mr-3">task_alt</span>Get groceries & more as soon as today</li>
                <li className="list-item"><span className="material-symbols-outlined mr-3">task_alt</span>Same everyday low prices as in-store</li>
                <li className="list-item"><span className="material-symbols-outlined mr-3">task_alt</span>$0 delivery fees</li>
              </ul>
          </div>
         </div>
       </div>
       </div>
       <div className="container">
       <div className="row w-100 h-100">
         <div className="col">
            <img className="image" src="./Assets/scan.png" alt=""/>
         </div>
         <div className="col">
         <div className="description column">
              <h1 style={{textAlign: "center", fontSize: "1.6em", marginRight: "5em"}}>Scan & go</h1>
              <ul className="list" style={{fontSize: "1.2em"}}>
                <li className="list-item"><span className="material-symbols-outlined mr-3">task_alt</span>Contact-free checkout</li>
                <li className="list-item"><span className="material-symbols-outlined mr-3">task_alt</span>Less time at the register</li>
                <li className="list-item"><span className="material-symbols-outlined mr-3">task_alt</span>Streamlined store shopping</li>
              </ul>
          </div>
         </div>
       </div>
       </div>
      </div>
      <Departments/>
    
    </>
  );
};

export default Home;
