"use client";

import { useEffect, useState } from "react";
import "../recently_view/recently_view.css"

export default function Recently_View() {
    const [product, setProduct] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // For swapping

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("http://localhost:3001/products");
            const data = await response.json();
            setProduct(data);
        };
        getData();
    }, []);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex + 5 < product.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const visibleProducts = product.slice(currentIndex, currentIndex + 5);

    return (
        <div className="recently-container">
            <h2 className="recently-title">Recently Viewed</h2>

            <div className="recently-wrapper">
                <button className="swap-btn" onClick={handlePrev} disabled={currentIndex === 0}>

                    ◀
                    
                </button>

                <div className="recently-list">
                    {visibleProducts.map((item) => (
                        <div className="recently-card" key={item.id}>
                            <img src={item.image} alt={item.name} className="recently-img" />
                            <h4 className="recently-name">{item.name}</h4>
                            <p className="recently-price">${item.price}</p>
                        </div>
                    ))}
                </div>

                <button
                    className="swap-btn"
                    onClick={handleNext}
                    disabled={currentIndex + 5 >= product.length}
                >
                    ▶  

                </button>
            </div>
        </div>
    );
}
