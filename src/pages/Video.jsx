function Video() {
    //https://trapgaming.spdns.org/src/priv/Backrooms.mp4
    return (
        <div className="App">
            <h1 className="title">Backrooms Project</h1>
            <p className="subtitle">by Leandro Ferrer & Diego Schindele</p>
            <div className="content">
                <div className="text_box">
                    <p>Our project is a "found footage" style video that shows a student entering the backrooms. The backrooms is an infinite liminal space which humanoid figures inhabit.</p>
                    <p>Showing some distress the student leaves through the door after waking up in an empty classroom and finds himself trapped in the backrooms. The student then wanders around, avoiding the creature he saw. When he then arrives at a narrow corridor he gets swallowed by the darkness.</p>
                    <p>This project was quite work intensive, especially the animation but I had fun making it and learned a few things about animating in 3d.</p>
                </div>
                <div className="video_box">
                    <video className="video" src="https://trapgaming.spdns.org/src/priv/Backrooms.mp4" controls>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Video