import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { db, storage } from '../../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const LiveStreaming = () => {
    const user = useSelector(selectUser);
    const [streaming, setStreaming] = useState(false);
    const [streamKey, setStreamKey] = useState('');
    const videoRef = useRef(null);

    const startStreaming = async () => {
        if (videoRef.current) {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            videoRef.current.srcObject = stream;
            setStreaming(true);

            const key = db.collection('streams').doc().id;
            setStreamKey(key);

            await db.collection('streams').doc(key).set({
                user: user.uid,
                streamKey: key,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        }
    };

    const stopStreaming = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
            setStreaming(false);
        }
    };

    return (
        <div className="live-streaming">
            <h2>Live Streaming</h2>
            <video ref={videoRef} autoPlay muted></video>
            {streaming ? (
                <button onClick={stopStreaming}>Stop Streaming</button>
            ) : (
                <button onClick={startStreaming}>Start Streaming</button>
            )}
            {streamKey && <p>Stream Key: {streamKey}</p>}
        </div>
    );
};

export default LiveStreaming;
