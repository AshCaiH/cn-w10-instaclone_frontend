import { useContext } from "react";
import { userContext } from "../../common/contexts";

import { FaHeartCircleMinus, FaHeartCirclePlus } from "react-icons/fa6";
import { postRequest } from "../../common/requests";

export const ImageControls = (props) => {
    const user = useContext(userContext).user;

    const like = async () => {
        const query = JSON.stringify(props.image);

        const headers = {
            authorization: "Bearer " + user.token,
            "Content-Type": "application/json",
        }

        const response = await postRequest("http://localhost:5001/image/like", query, headers);

        console.log(response);
    } 
    
    return (
        <div className="image-controls">
            < FaHeartCirclePlus 
                className="icon like-icon" 
                onClick={like}/>
        </div>
    )
}