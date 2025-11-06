"use client";

import { useEffect, useState } from "react";
import "./product.css"; // ✅ Import CSS file

export default function Product() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("http://localhost:3001/products");
            let data = await response.json();
            const idsToShow = [1, 2, 3, 4, 5, 6, 7, 8];
            data = data.filter((item) => idsToShow.includes(item.id))

            setProduct(data);
        };
        getData();
    }, []);

    return (
        <>
            <h2 style={{ marginLeft: "150px" }}> New Arrivals </h2>

            <div className="product-container">

                {product.map((item) => (
                    <div className="product-card" key={item.id}>
                        <img src={item.image} alt={item.name} className="product-image" />
                        <h3 className="product-name">{item.name}</h3>
                        <h4 className="product-price">₹{item.price}</h4>
                    </div>
                ))}
            </div>

        </>
    );
}
