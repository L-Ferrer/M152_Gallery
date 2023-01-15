function Video() {
    //https://trapgaming.spdns.org/src/priv/Backrooms.mp4
    return (
        <div>
            <h1 className="title">Backrooms Project</h1>
            <p className="subtitle">by Diego & Ferrer</p>
            <div className="video_box">
                <video className="video" src="https://trapgaming.spdns.org/src/priv/Backrooms.mp4" controls>
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>
    )
}

export default Video