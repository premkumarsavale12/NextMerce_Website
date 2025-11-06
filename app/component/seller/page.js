"use client";

import { useEffect, useState } from "react";
import "./seller.css"; // ✅ import CSS file

export default function Seller() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("http://localhost:3001/products");
            let data = await response.json();


            const idsToShow = [9, 10, 11, 12, 13];
            data = data.filter((item) => idsToShow.includes(item.id));

            setProduct(data);
        };
        getData();
    }, []);

    return (
        <>

            <h2 style={{ marginLeft: "100px" }}>  Best Sellers </h2>

            <div className="seller-container">
                {products.map((item) => (
                    <div className="seller-card" key={item.id}>
                        <img src={item.image} alt={item.name} className="seller-image" />
                        <h3 className="seller-name">{item.name}</h3>
                        <h4 className="seller-price">₹{item.price}</h4>
                    </div>
                ))}
            </div>

        </>
    );
}
