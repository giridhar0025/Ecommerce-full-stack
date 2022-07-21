import React, { useState } from "react";
import './signup.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom'



  


const Signup = () => {

    const navigate = useNavigate()

    const [register, setRegister] = useState({})

    const [invalidSignUp, setInvalidSignUp] = useState("invalidSignupDetailsTrue")


    const handleRegister = () => {
       axios({
        url : "https://ecommerce-backend-v1.herokuapp.com/user/signup",
        method : "POST",
        headers : {
            
        },
        data : register
       }).then((res) => {
        navigate('/user/login')
        // console.log(res)
       }).catch((err) => {
        
        console.log(err)
        setInvalidSignUp("invalidSignupDetailsFalse")
       })
    }

    const handleInputChange = (e, id) => {
       setRegister({...register, [id] : e.target.value})
    }
     
    // console.log(register)

  return (
    <>
    <section   className="vh-100 bg-image" style={{"backgroundImage":"url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
      <div className="mask d-flex align-items-center h-100 gradient-signup">
        <div className="container h-100">
          
          <div style={{width: "100%", marginTop: "0px"}}  className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{"borderRadius":"15px"}}>
                <div className="card-body p-5">
                  
                  <h2 className="text-uppercase text-center mb-5"><img alt="" src='./Assets/walmart-icon.svg'/>  Create an account</h2>
                  <form>
                    <div className="form-outline mb-4">
                      <input onChange={(e) => {handleInputChange(e, "username")}} type="text" id="username" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="username">Your Name</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input onChange={(e) => {handleInputChange(e, "email")}} type="email" id="email" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="email">Your Email</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input onChange={(e) => {handleInputChange(e, "phone_number")}} type="phone_number" id="phone_number" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="phone_number">Phone Number</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input onChange={(e) => {handleInputChange(e, "password")}} type="password" id="password" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="password">Password</label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="button" className="btn btn-success btn-block btn-lg gradient-signup gradient-signup-btn text-body" onClick={handleRegister}>Register</button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0"><u className={invalidSignUp}>Please Enter Valid Details</u></p>
                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Signup;
