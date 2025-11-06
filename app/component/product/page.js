"use client";

import { useEffect, useState } from "react";
import "./product.css";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3001/products");
      let data = await response.json();

      // ✅ Filter specific products
      const idsToShow = [1, 2, 3, 4, 5, 6, 7, 8 ];
      data = data.filter((item) => idsToShow.includes(item.id));

      setProducts(data);
    };
    getData();
  }, []);

  return (
    <div className="product-section">
      <div className="product-header">
        <h2 className="product-title">New Arrivals</h2>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="product-container">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} className="product-image" />
            <h3 className="product-name">{item.name}</h3>
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
