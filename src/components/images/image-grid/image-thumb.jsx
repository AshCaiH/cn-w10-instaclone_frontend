// props
// - image

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
            // rotate: randomAngle(12),
        }}>
            <div className="image-thumb" style={{
                backgroundImage: `url(${props.image.urlSmall})`,
                // backgroundPositionX: randomSide(),
            }} />
        </div>
    )
}

export default ImageThumb