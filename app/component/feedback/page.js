'use client';
import { useState } from 'react';
import Image from 'next/image';
import "../feedback/feedback.css"
import user from "../../../public/user-04.webp"
import user1 from "../../../public/user-01.webp"

const feedbacks = [
    {
        name: 'Wilson Dias',
        role: 'Backend Developer',
        image: '/images/user1.png',
        text: 'Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitae augue suscipit beautiful vehicula.',
    },
    {
        name: 'Davis Donwart',
        role: 'Serial Entrepreneur',
        image: '/images/user2.png',
        text: 'Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitae augue suscipit beautiful vehicula.',
    },
    {
        name: 'Wilson Dias',
        role: 'Backend Developer',
        image: '/images/user1.png',
        text: 'Lorem ipsum dolor sit amet, adipiscing elit. Donec malesuada justo vitae augue suscipit beautiful vehicula.',
    },
];

export default function FeedBack() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
    };

    const { name, role, image, text } = feedbacks[current];

    return (
        <div className="container">
            <h1>User Feedbacks</h1>

            <div className="slider">
                {/* <button className="arrow" onClick={prevSlide}>
                    &#60;
                </button> */}

                <div className="card">
                    <div className="stars">★★★★★</div>
                    <p className="text">{text}</p>
                    <div className="user">
                        <Image src={user} alt={name} width={50} height={50} className="avatar" />
                        <div>
                            <h4>{name}</h4>
                            <span>{role}</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="stars">★★★★★</div>
                    <p className="text">{text}</p>
                    <div className="user">
                        <Image src={user1} alt={name} width={50} height={50} className="avatar" />
                        <div>
                            <h4>{name}</h4>
                            <span>{role}</span>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="stars">★★★★★</div>
                    <p className="text">{text}</p>
                    <div className="user">
                        <Image src={user} alt={name} width={50} height={50} className="avatar" />
                        <div>
                            <h4>{name}</h4>
                            <span>{role}</span>
                        </div>
                    </div>
                </div>

                {/* <button className="arrow" onClick={nextSlide}>
                    &#62;
                </button> */}
            </div>
        </div>
    );
}
