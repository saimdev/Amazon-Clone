import React from "react"
import { Link } from "react-router-dom"
import './LoginPage.css'
import loginlogo from "../images/login_logo.png"

function LoginPage(){
    return(
        <div className="loginpage">
            <Link to="/" className="login__logo__link">
                <img src={loginlogo} alt="amazon_logo" className="login__logo"/>
            </Link>
            <div className="login__container">
               <h3 className="login__heading">Create Account</h3>
               <h5 className="login__name__text">Your name</h5>
               <input type="text" className="login__name__input"/>
               <h5 className="login__email__text">Mobile number or email</h5>
               <input type="text" className="login__email__input"/>
               <h5 className="login__password__text">Password</h5>
               <input type="text" className="login__password__input"/>
               <h5 className="login__repassword__text">Re-enter password</h5>
               <input type="text" className="login__repassword__input"/>
               <button className="login__create__button">Continue</button>
               <span className="login__create__info">By creating an account, you agree to Amazon's Conditions of Use and Privacy Note</span>
            </div>
        </div>
    )
}

export default LoginPage;