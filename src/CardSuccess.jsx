import React from "react";
import Success from "./images/icon-success.svg";


const CardSuccess = (email) => {
    return (<>
        <div className="cardsuccess">
            <img src ={Success} alt="success"/>
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <span>{email.userEmail}</span>. Please open it and click the button inside to confirm your subscription.</p>
            <button type="submission" onClick={() => {email.dismiss()}}>Dismiss message</button>
        </div>
    </>)
}

export default CardSuccess;