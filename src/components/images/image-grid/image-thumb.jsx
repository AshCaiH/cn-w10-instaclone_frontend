// props
// - image

import { ImageControls } from "../image-controls";

export const ImageThumb = (props) => {
    const randomSide = () => {
        if (Math.random() > 0.5) return "100%";
        else return "0";
    }

    const randomAngle = (limit) => {
        return (Math.random() * limit - (limit/2)) + "deg"
    }

    return (
        <div className="polaroid" style={{
            // rotate: randomAngle(6),
        }}>
            <a href={props.image.urlRegular} target="_blank"><div className="image-thumb" style={{
                backgroundImage: `url(${props.image.urlSmall})`,
                // backgroundPositionX: randomSide(),
            }} /></a>

            <ImageControls image={props.image}/>
        </div>
    )
}

export default ImageThumb