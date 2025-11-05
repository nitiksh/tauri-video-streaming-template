import React, { useState } from "react";
import { CustomVideoPlayer } from "@ntxmjs/react-custom-video-player";
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize,
    Minimize,
    PictureInPicture2,
    Settings,
    Gauge,
    Captions,
    ArrowLeft,
    MonitorPlay,
    Check,
    Moon,
    Volume1,
    BadgeHelp,
} from "lucide-react";

export default function Player({ path }) {
    const [videoUrl, setVideoUrl] = useState(path || "");

    const playerIcons = {
        play: <Play size={24} />,
        pause: <Pause size={24} />,
        volume: <Volume2 size={24} />,
        volumeMute: <VolumeX size={24} />,
        fullscreen: <Maximize size={24} />,
        exitFullscreen: <Minimize size={24} />,
        pip: <PictureInPicture2 size={24} />,
        settings: <Settings size={24} />,
        speed: <Gauge size={24} />,
        cc: <Captions size={24} />,
        back: <ArrowLeft size={24} />,
        theater: <MonitorPlay size={24} />,
        check: <Check size={24} />,
        hdChip: <BadgeHelp size={24} />,
        sleepTimer: <Moon size={24} />,
        stableVolume: <Volume1 size={24} />,
    };

    const handleVideoSelect = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setVideoUrl(url);
        }
    };
    const videoContainerStyles = {
        parent: {
            width: "100%",
            height: "100vh",
        },
        video: {
            width: "100%",
            height: "100%",
        },
    };
    return (
        <div className="min-h-screen w-screen bg-slate-900 text-slate-50 flex items-center justify-center overflow-hidden p-5 box-border">
            {videoUrl ?
                <div className="flex items-center justify-center w-full h-full">
                    <CustomVideoPlayer
                        src={videoUrl}
                        poster="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
                        icons={playerIcons}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        videoContainerStyles={videoContainerStyles}
                    />
                </div> : <p className="text-red-500">Video Path Not Found</p>
            }
        </div>
    )
}
