import { useContext } from "react";
import { userContext } from "../../common/contexts";

import { FaHeartCircleMinus, FaHeartCirclePlus } from "react-icons/fa6";

export const ImageControls = () => {
    const user = useContext(userContext).user;

    const like = () => {

    }
    
    return (
        <div className="image-controls">
            < FaHeartCirclePlus 
                className="icon like-icon" 
                onClick={like}/>
        </div>
    )
}