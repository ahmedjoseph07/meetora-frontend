import React from 'react';
import { useRef, useState } from "react";
import "../Meeting.css";

const serverUrl = "http://localhost:8000";
let connections = {};

const peerConfigConnections = {
    "iceServers": [
        { "urls": "stun:stun.l.google.com:19302" }
    ]
}

const VideoMeeting = () => {

    let socketRef = useRef();
    let socketIdRef = useRef();
    let localVideoRef = useRef();
    const videoRef = useRef([]);
    

    let [videoAvailable, setVideoAvailable] = useState(true);
    let [audioAvailable, setAudioAvailable] = useState(true);
    let [video, setVideo] = useState();
    let [videos, setVideos] = useState([]);
    let [audio, setAudio] = useState();
    let [screen, setScreen] = useState();
    let [showModel, setShowModel] = useState();
    let [screenAvailable, setScreenAvailable] = useState();
    let [messages, setMessages] = useState([]);
    let [message, setMessage] = useState("");
    let [newMessage, setNewMessage] = useState(0);
    let [askForUsername, setAskForUsername] = useState(true);
    let [username, setUsername] = useState([]);



    // if(isChrome()== false){
    // todo
    // }

    return (
        <div>
            {askForUsername == true ?
                <div>
                    {/* todo */}
                </div> : <></>}
        </div>
    )
}

export default VideoMeeting;
