'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import "../Enhance/Enhance.css"
import HeadPhone from "../../../public/headphone_img.webp"
export default function PromoBanner() {
    const [timeLeft, setTimeLeft] = useState({
        days: 6,
        hours: 17,
        minutes: 9,
        seconds: 16,
    });

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) seconds--;
                else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else if (days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    return (
        <div className="promo-container">
            <Image
                src={HeadPhone}
                alt="Promo Banner"
                width={800}
                height={400}
                className="promo-image"
            />
            <div className="promo-content">
                <h2>Don't Miss!!</h2>
                <p>Enhance Your Music Experience</p>
                <h3>iPhone 16 Pro Max</h3>
                <div className="countdown">
                    <span>{timeLeft.days} Days</span>
                    <span>{timeLeft.hours} Hours</span>
                    <span>{timeLeft.minutes} Minutes</span>
                    <span>{timeLeft.seconds} Seconds</span>
                </div>
                <button className="cta-button">Check it Out!</button>
            </div>
        </div>
    );
}
