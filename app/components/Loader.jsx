"use client";
import { useEffect, useState } from "react";

const Loader = ({ onFinish }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (document.readyState === "complete") {
            setLoading(false);
            onFinish(); 
        } else {
            window.addEventListener("load", () => {
                setLoading(false);
                onFinish();
            });
        }
        return () => window.removeEventListener("load", onFinish);
    }, [onFinish]);

    if (loading) {
        return (
            <div id="loader" className="fixed inset-0 z-50 h-screen flex items-center justify-center bg-black text-white z-99">
                <h1 className="text-3xl font-bold animate-pulse">Loading...</h1>
            </div>
        );
    }

    return null;
};

export default Loader;
