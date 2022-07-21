import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'



const Login = () => {

    const navigate = useNavigate()
    
    const [login, setLogin] = useState({ email : "", password : ""})

    const [wrongPass, setWrongPass] = useState("wrongPasswordTrue")

    const handleLogin = () => {
        axios({
            url : "https://ecommerce-backend-v1.herokuapp.com/user/login",
            method : "POST",
            headers : {
                
            },
            data : login
           }).then((res) => {
            
            if (res.data.authorization.length) {
                localStorage.setItem("authorization", res.data.authorization)
                 navigate('/')
            } 
           }).catch((err) => {
            console.log(err)
            setWrongPass("wrongPasswordFalse")
           })
    }
    localStorage.setItem("email", login.email)
    return (
        <>
            <section className="vh-100 bg-image" style={{ "backgroundImage": "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
                <div className="mask d-flex align-items-center h-100 gradient-signup">
                    <div className="container h-100">
                        <div  style={{width: "100%", marginTop: "0px"}}  className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ "borderRadius": "15px" }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5"><img src='./Assets/walmart-icon.svg' alt=""/>  Log in</h2>
                                        <form>
                                            <div className="form-outline mb-4">
                                                <input onChange={(e) => {setLogin({...login, email : e.target.value})}} type="email" id="email" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="email">Your Email</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input onChange={(e) => {setLogin({...login, password : e.target.value})}} type="password" id="password" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="password">Password</label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button onClick={handleLogin} type="button" className="btn btn-success btn-block btn-lg gradient-signup gradient-signup-btn text-body">Log in</button>
                                            </div>
                                            <p className="text-center text-muted mt-5 mb-0"><a href="#!" className="fw-bold text-body"><u className={wrongPass}>Invalid Details !</u></a></p>
                                            <p className="text-center text-muted mt-5 mb-0"><a href="#!" className="fw-bold text-body"><u>Forgot password ?</u></a></p>
                                            <p className="text-center text-muted mt-5 mb-0"><a href="#!" className="fw-bold text-body"><u>Update password ?</u></a></p>
                                            <p className="text-center text-muted mt-5 mb-0">Don't have an account ? <a href="#!" className="fw-bold text-body"><u>Register here</u></a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login