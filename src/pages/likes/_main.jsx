import { useEffect, useState } from "react";

import { AiOutlineLoading } from "react-icons/ai";

import ImageThumb from "../../components/images/image-grid/image-thumb";
import { getRequest } from "../../common/requests";

export const PageLikes = (props) => {
    const [images, setImages] = useState(null);

    useEffect(() => {
        const fetchImages = async() => {
            const headers = {
                authorization: "Bearer " + props.user.token,

                "Content-Type": "application/json",
            }
            const response = await getRequest("http://localhost:5001/user/likes", headers);

            console.log(response);

            setImages(response.result);
        }

        fetchImages();
    }, [props.user.token]);

    return (
        <div className="section">
            <h2>{props.user.username}&lsquo;s Liked Images</h2>
            { images ?
                <div id="image-grid"> 
                    { images.map((item) => {
                        return <ImageThumb key={item.id} image={item} />
                    }) }
                </div>
                :
                <AiOutlineLoading className="icon loading-icon"/>
            }
        </div>
    )
}

export default PageLikes;