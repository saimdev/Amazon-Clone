import React from "react"
import './LoginPage.css'
import CreateAccount from "./CreateAccount"
import LoginFooter from "./LoginFooter"

function LoginPage(){
    return(
        <div className="loginpage">
            <CreateAccount/>
            <LoginFooter/>
        </div>
    )
}

export default LoginPage;