function Video() {
    return (
        <div>
            Video
        </div>
    )
}

function Img({imgalt}) {
    return (
        <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt={imgalt}
        />
    )
}

export { Video, Img }