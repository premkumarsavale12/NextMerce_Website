"use client";

import { useEffect, useState } from "react";
import "./seller.css"; // ✅ Import CSS file

export default function Seller() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        if (!response.ok) throw new Error("Failed to fetch data");
        let data = await response.json();

        // ✅ Show only specific products
        const idsToShow = [9, 10, 11, 12, 13];
        data = data.filter((item) => idsToShow.includes(item.id));

        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="seller-section">
      <div className="seller-header">
        <h2 className="seller-title">Best Sellers</h2>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="seller-container">
        {products.map((item) => (
          <div className="seller-card" key={item.id}>
            <img src={item.image} alt={item.name} className="seller-image" />
            <h3 className="seller-name">{item.name}</h3>
            <div className="price-section">
              <span className="new-price">₹{item.price}</span>
              {item.oldPrice && (
                <span className="old-price">₹{item.oldPrice}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
