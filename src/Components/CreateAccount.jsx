import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './CreateAccount.css'
import loginlogo from "../images/login_logo.png"
import {auth} from "./firebase"

function CreateAccount(){

    const navigate = useNavigate()
    const [pass, setPass]=useState("");
    const [confirmPass, setConfirmPass] = useState("")
    const [email, setEmail] = useState("");
    const [name, setName] = useState("")

    const onLogin = (e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, pass)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                navigate("/home")
            }
        })
        .catch(error=>{
            alert(error.message)
        })
    }

    const onRegister = (e)=>{
        e.preventDefault();
        if(pass===confirmPass){
            auth.createUserWithEmailAndPassword(email, pass)
            .then((auth)=>{
                console.log(auth);
                if(auth){
                    alert("Account successfully registered")
                    navigate("/home")
                }
            })
            .catch(error=>{
                alert(error.message)
            })
        }else{
            alert("Both fields of password should be same")
        }
    }

    

    return(
        <div className="createaccount">
            <Link to="/" className="createaccount__logo__link">
                <img src={loginlogo} alt="amazon_logo" className="createaccount__logo"/>
            </Link>
            <div className="createaccount__container">
               <h3 className="createaccount__heading">Create Account</h3>
               <h5 className="createaccount__name__text">Your name</h5>
               <input type="text" className="createaccount__name__input" value={name} onChange={e => setName(e.target.value)}/>
               <h5 className="createaccount__email__text">Mobile number or email</h5>
               <input type="email" className="createaccount__email__input" value={email} onChange={e => setEmail(e.target.value)}/>
               <h5 className="createaccount__password__text">Password</h5>
               <input type="password" className="createaccount__password__input" value={pass} onChange={e => setPass(e.target.value)}/>
               <h5 className="createaccount__repassword__text">Re-enter password</h5>
               <input type="password" className="createaccount__repassword__input" value={confirmPass} onChange={e => setConfirmPass(e.target.value)}/>
               <button className="createaccount__create__button" onClick={onLogin} type='submit'>Continue</button>
               <span className="createaccount__create__info">By creating an account, you agree to Amazon's Conditions of Use and Privacy Note</span>
               <span className="createaccount__signIn">Already have an account? Sign in</span>
               <span className="createaccount__create__business">Buying for work? Create a free business account</span>
            </div>
        </div>
    )
}

export default CreateAccount;