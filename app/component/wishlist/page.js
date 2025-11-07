import { ImFileEmpty } from "react-icons/im";

import "../wishlist/wishlist.css"
import Link from "next/link"

export default function cart() {
    return (
        <div className="checkout-container">
            <h1 className="checkout-title">  WishlList  </h1>

            <div className="checkout-box">
                <ImFileEmpty className="checkout-icon" />

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
