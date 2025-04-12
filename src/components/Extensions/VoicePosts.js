import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { db, storage } from '../../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const VoicePosts = () => {
    const user = useSelector(selectUser);
    const [recording, setRecording] = useState(false);
    const [audioURL, setAudioURL] = useState('');
    const audioRef = useRef(null);
    const mediaRecorderRef = useRef(null);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = (event) => {
            const audioBlob = new Blob([event.data], { type: 'audio/wav' });
            const audioURL = URL.createObjectURL(audioBlob);
            setAudioURL(audioURL);
        };
        mediaRecorderRef.current.start();
        setRecording(true);
    };

    const stopRecording = () => {
        mediaRecorderRef.current.stop();
        setRecording(false);
    };

    const saveRecording = async () => {
        const response = await fetch(audioURL);
        const blob = await response.blob();
        const storageRef = storage.ref();
        const audioRef = storageRef.child(`voicePosts/${user.uid}/${Date.now()}.wav`);
        await audioRef.put(blob);
        const downloadURL = await audioRef.getDownloadURL();

        await db.collection('voicePosts').add({
            user: user.uid,
            audioURL: downloadURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setAudioURL('');
    };

    return (
        <div className="voice-posts">
            <h2>Voice Posts</h2>
            {recording ? (
                <button onClick={stopRecording}>Stop Recording</button>
            ) : (
                <button onClick={startRecording}>Start Recording</button>
            )}
            {audioURL && (
                <div>
                    <audio ref={audioRef} src={audioURL} controls />
                    <button onClick={saveRecording}>Save Recording</button>
                </div>
            )}
        </div>
    );
};

export default VoicePosts;
