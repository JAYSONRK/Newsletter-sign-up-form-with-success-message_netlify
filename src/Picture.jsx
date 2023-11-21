import React from "react";
import DesktopImg from "./images/illustration-sign-up-desktop.svg";
import MobileImg from "./images/illustration-sign-up-mobile.svg";

const Picture = () => {
    return (<>
            <picture>
                <source media="(min-width:768px)" srcSet={DesktopImg}/>
                <img src={MobileImg} alt="signup"/>
            </picture>
            </>)
}

export default Picture;