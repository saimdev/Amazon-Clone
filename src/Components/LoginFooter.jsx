import React from "react"
import { Link } from "react-router-dom"
import './LoginFooter.css'

function LoginFooter(){
    return(
        <div className="loginfooter">
            <a href="#">Conidition of Use</a>
            <a href="#">Privacy Note</a>
            <a href="#">Help</a>
            <span className="loginfooter__copyright">C 1996-2022, AmazonClone.com, Inc. or its affiliates</span>
        </div>
    )
}

export default LoginFooter;