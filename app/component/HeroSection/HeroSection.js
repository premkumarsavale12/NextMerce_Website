"use client";

import Image from "next/image";
 
// import img from "../../public/sl-1.webp"
// import img1 from "../../public/sl-2.webp"
// import img2 from "../../public/sl-3.webp"
// import first from "../../public/r-1.webp"
// import second from "../../public/r-2.webp"

 
import img from "../../../public/sl-1.webp"
import img1 from "../../../public/sl-2.webp"
import img2 from "../../../public/sl-3.webp"

import first from "../../../public/r-1.webp"
import second from "../../../public/r-2.webp"

import "./HeroSection.css";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const images = [img, img1, img2]; // add your 3 images here
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="hero-container">
            {/* Left Section */}
            <div className="hero-left">
                <Image
                    src={images[currentImage]} // your banner image in public folder
                    alt="Apple Watch Ultra"
                    width={600}
                    height={600}
                    className="hero-banner-img"
                />
                <div className="hero-text">
                    <p className="hero-subtitle">PREMIUM DESIGN</p>
                    <h1 className="hero-title">Apple Watch Ultra</h1>
                    <p className="hero-desc">
                        Advanced imaging performance with a 200MP AI camera with enhanced
                        image quality.
                    </p>
                    <button className="hero-btn">Shop Now</button>
                </div>
            </div>

            {/* Right Section */}
            <div className="hero-right">
                <div className="hero-card blue-bg">
                    <div className="hero-card-text">
                        <h3>Smart Security Home Camera</h3>
                        <p>
                            Save up to <span className="highlight">$450</span>
                        </p>
                    </div>
                    <Image
                        src={first}
                        alt="Smart Camera"
                        width={60}
                        height={120}
                        className="hero-card-img"
                    />
                </div>


                <div className="hero-card gray-bg">
                    <div className="hero-card-text">
                        <h3>Galaxy S24 Ultra 5G</h3>
                        <p>
                            Save up to <span className="highlight">$600</span>
                        </p>
                    </div>
                    <Image
                        src={second}
                        alt="Galaxy S24"
                        width={120}
                        height={120}
                        className="hero-card-img"
                    />
                </div>
            </div>
        </div>
    );
}
