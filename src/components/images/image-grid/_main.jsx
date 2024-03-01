import { useEffect, useState } from "react";
import { ImageThumb } from "./image-thumb";

import { AiOutlineLoading } from "react-icons/ai";

import "./_style.css"
import { getRequest } from "../../../common/requests";

export const ImageGrid = (props) => {
    const [images, setImages] = useState(null);

    useEffect(() => {
        const fetchImages = async() => {
            const response = await getRequest(`http://localhost:5001/unsplash/getlist/${1}`);

            setImages(response.images);
        }

        fetchImages();
    }, []);

    return (
        <div className="section">
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

export default ImageGrid;