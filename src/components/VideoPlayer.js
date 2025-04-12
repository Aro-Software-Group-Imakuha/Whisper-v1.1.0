import React, { useRef, useState } from 'react';

const VideoPlayer = ({ videoUrl, subtitlesUrl }) => {
    const videoRef = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);

    const toggleFullScreen = () => {
        if (!isFullScreen) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.mozRequestFullScreen) {
                videoRef.current.mozRequestFullScreen();
            } else if (videoRef.current.webkitRequestFullscreen) {
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.msRequestFullscreen) {
                videoRef.current.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        setIsFullScreen(!isFullScreen);
    };

    const handlePlaybackRateChange = (event) => {
        const rate = parseFloat(event.target.value);
        setPlaybackRate(rate);
        videoRef.current.playbackRate = rate;
    };

    return (
        <div className="video-player">
            <video ref={videoRef} controls>
                <source src={videoUrl} type="video/mp4" />
                {subtitlesUrl && <track src={subtitlesUrl} kind="subtitles" />}
            </video>
            <div className="controls">
                <button onClick={toggleFullScreen}>
                    {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
                </button>
                <label>
                    Playback Speed:
                    <select value={playbackRate} onChange={handlePlaybackRateChange}>
                        <option value="0.5">0.5x</option>
                        <option value="1">1x</option>
                        <option value="1.5">1.5x</option>
                        <option value="2">2x</option>
                    </select>
                </label>
            </div>
        </div>
    );
};

export default VideoPlayer;
