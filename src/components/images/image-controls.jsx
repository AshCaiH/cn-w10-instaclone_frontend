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
            // The likes pages receives slightly different information from the database
            // so this makes sure everything matches up.
            if (props.image.ImageId) props.image.id = props.image.ImageId;

            const query = JSON.stringify({ id: props.image.id });
    
            const headers = {
                authorization: "Bearer " + user.token,

                "Content-Type": "application/json",
            }
    
            const response = await postRequest(`${import.meta.env.VITE_SERVER_URL}/image/liked`, query, headers);
    
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
            const response = await postRequest(`${import.meta.env.VITE_SERVER_URL}/image/like`, query, headers);
        } else {
            const response = await deleteRequest(`${import.meta.env.VITE_SERVER_URL}/image/unlike`, query, headers);
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