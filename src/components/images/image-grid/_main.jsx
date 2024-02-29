import { useContext, useEffect, useState } from "react";
import { ImageThumb } from "./image-thumb";

import { AiOutlineLoading } from "react-icons/ai";

import "./_style.css"
import { getRequest } from "../../../common/requests";
import { userContext } from "../../../common/contexts";

export const ImageGrid = (props) => {
    const [images, setImages] = useState(null);
    const user = useContext(userContext).user;

    useEffect(() => {
        const fetchData = async() => {
            const data = await fetch('/test-data/images.json')
            .then((response) => response.json())

            setImages(data.images);
        }
    
        fetchData();
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