import React, {useState} from "react";
import Picture from "./Picture";
import Description from "./Description";
import Email from "./Email";
import CardSuccess from "./CardSuccess";

const Card = () => {
    const [validId, setValidId] = useState(false);
    const [userEmail, setEmail] = useState("");
    const validation = (data, email) => {
      return (
        setValidId(data),
        setEmail(email))
    }

    const dismiss = (dis) => {
        setValidId(!validId)
    }
    
    return (<>
        {!validId ?
        <div className="card">
            <Picture/>
            <div className="article">
                <Description/>
                <Email 
                    validation={validation}
                />
            </div>
        </div> :
        <CardSuccess
            userEmail = {userEmail}
            dismiss = {dismiss}
        />
        }
    </>)
}

export default Card;