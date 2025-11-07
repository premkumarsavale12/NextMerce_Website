import { BsCart2 } from "react-icons/bs";
import "../cart/cart.css"

import Link from "next/link"

export default function cart() {
    return (
        <div className="checkout-container">
            <h1 className="checkout-title">  Cart </h1>

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
