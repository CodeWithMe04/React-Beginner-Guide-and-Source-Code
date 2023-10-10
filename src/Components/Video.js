function Video({ title, src, alt, channel = "codewithme04", views, time, verified }) {
    let channelhtml

    if (verified) {
        channelhtml = <div className="channel">{channel} ✅</div>
    }
    else {
        channelhtml = <div className="channel">{channel} ❌</div>
    }
    return (
        <>
            <div className="container">
                <div className="pic">
                    <img src={src} alt={alt} />
                </div>
                <div className="title">{title}</div>
                {channelhtml}
                <div className="views">
                    {views} views <span>.</span> {time}
                </div>
            </div>
        </>
    )
}



export default Video