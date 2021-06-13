import React, {useRef, useState} from "react";


const MySpace = () => {
    const [stream, setStream] = useState<MediaStream|null>(null);
    const myVideo = useRef<HTMLVideoElement>(null!);

    const startVideo = (() => {
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
            .then((currentStream: MediaStream) => {
                setStream(currentStream);
                myVideo.current.srcObject = currentStream;
            })
    })

    const stopVideo = (() => {
        myVideo.current.srcObject = null;
    })

    return (
        <div className="MySpace">
            <video id="my_video" ref={myVideo} autoPlay />
            <br/>
            <button onClick={startVideo} className="video_button">再生</button>
            <button onClick={stopVideo} className="video_button">停止</button>
        </div>
    );
}

export default MySpace;