"use client";
import { useEffect, useState, useRef, ReactNode } from "react";

interface PreloaderProps {
    children: ReactNode;
    videoSrc?: string;
    backgroundColor?: string;
}

const Preloader: React.FC<PreloaderProps> = ({
    children,
    videoSrc = "/videos/video-4.mp4",
    backgroundColor = "#000",
}) => {
    const [loading, setLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const handleVideoEnd = () => setLoading(false);

        if (videoRef.current) {
            videoRef.current.addEventListener("ended", handleVideoEnd);
        }

        const timeout = setTimeout(() => setLoading(false), 10000); // Timeout after 10s

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener("ended", handleVideoEnd);
            }
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            {loading && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999,
                    }}
                >
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        aria-label="Loading animation"
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain", // Ensures the video fits within the screen
                        }}
                    >
                        <source src={videoSrc} type="video/mp4" />
                        <source src="/videos/video-4.webm" type="video/webm" />
                        <source src="/videos/video-4.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
            {!loading && children}
        </>
    );
};

export default Preloader;
