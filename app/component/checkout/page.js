import { BsCart2 } from "react-icons/bs";

import "../checkout/checkout.css";
import Link from "next/link"

export default function Checkout() {
  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-box">
        <BsCart2 className="checkout-icon" />

        <h4 className="checkout-message">
          No items found in your cart to checkout.
        </h4>


        <Link href={"/component/shop"} >
          <button className="checkout-btn" >Continue Shopping</button>
        </Link>

      </div>
    </div>
  );
}
