import { useContext, useEffect, useState } from "react";
import { userContext } from "../../common/contexts";

import { FaHeartCircleMinus, FaHeartCirclePlus } from "react-icons/fa6";
import { deleteRequest, getRequest, postRequest } from "../../common/requests";

export const ImageControls = (props) => {
    const user = useContext(userContext).user;
    const [liked, setLiked] = useState(false);

    useEffect(() => {}, [liked]);

    useEffect(() => {
        const checkIfLiked = async () => {
            const query = JSON.stringify({ id: props.image.id });
    
            const headers = {
                authorization: "Bearer " + user.token,

                "Content-Type": "application/json",
            }
    
            const response = await postRequest("http://localhost:5001/image/liked", query, headers);
    
            setLiked(response.like);
        }

        checkIfLiked();
    }, [props.image, user]);

    const like = async () => {
        const query = JSON.stringify(props.image);

        const headers = {
            authorization: "Bearer " + user.token,
            "Content-Type": "application/json",
        }

        if (!liked) {
            const response = await postRequest("http://localhost:5001/image/like", query, headers);
        } else {
            const response = await deleteRequest("http://localhost:5001/image/unlike", query, headers);
        }

        setLiked(!liked);
    }
    
    return (
        <div className="image-controls">
            < FaHeartCirclePlus 
                className={`icon like-icon ${liked ? "liked" : "not-liked"}`}
                onClick={like}/>
        </div>
    )
}