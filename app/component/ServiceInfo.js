"use client";
import "./ServiceInfo.css";
import { FaRocket, FaSyncAlt, FaLock, FaCommentDots } from "react-icons/fa";

export default function ServiceInfo() {
  return (
    <div className="service-container">
      <div className="service-item">
        <FaRocket className="service-icon" />
        <div>
          <h4>Free Shipping</h4>
          <p>For all orders $200</p>
        </div>
      </div>

      <div className="service-item">
        <FaSyncAlt className="service-icon" />
        <div>
          <h4>1 & 1 Returns</h4>
          <p>Cancellation after 1 day</p>
        </div>
      </div>

      <div className="service-item">
        <FaLock className="service-icon" />
        <div>
          <h4>100% Secure Payments</h4>
          <p>Guarantee secure payments</p>
        </div>
      </div>

      <div className="service-item">
        <FaCommentDots className="service-icon" />
        <div>
          <h4>24/7 Dedicated Support</h4>
          <p>Anywhere & anytime</p>
        </div>
      </div>
    </div>
  );
}
