"use client";
import React from "react";

import "../productDetails/productDetails.css"
import { PiStarThin } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";
export default function ProductDetails({ product, onBack }) {
    if (!product) return null;

    return (
        <div className="product-details">
            <div className="details-left">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image-large"
                />


            </div>
            <div className="details-right">
                <h2>{product.name}</h2>
                ⭐   ⭐  ⭐  ⭐   ( 4 customer reviews )    

                <p className="price"> Price :  ${product.price}</p>
                {product.rating && (
                    <p className="rating">
                        ⭐ {product.rating.rate} ({product.rating.count} reviews)
                    </p>
                )}

                <p><CiCircleCheck /> Free Delivery  </p>
                   <p><CiCircleCheck /> Sales 30% Off Use Code: PROMO30 </p>
                <p className="description">{product.description}</p>
                <div className="buttons">
                    <button className="purchase-btn">Purchase</button>
                    <button className="cart-btn">Add to Cart</button>
                </div>
                <button className="back-btn" onClick={onBack}>
                    ⬅ Back
                </button>
            </div>
        </div>
    );
}
