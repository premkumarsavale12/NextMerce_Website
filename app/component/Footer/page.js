// Footer.js
import React from 'react';
// import './footer.css';
import "../Footer/footer.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiAppstore, SiGoogleplay } from 'react-icons/si';

import american from "../../../public/american.svg"
import master from "../../../public/master.svg"
import paypal from "../../../public/paypal.svg"
import visa from "../../../public/visa.svg"
import websten from "../../../public/websten.svg" 
 import Image from 'next/image';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                {/* Help & Support */}
                <div>
                    <h3>Help & Support</h3>
                    <p>685 Market Street, Las Vegas, LA 95820</p>
                    <p>Phone: (+009) 582-706-9849</p>
                    <p>Email: support@example.com</p>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                </div>

                {/* Account */}
                <div>
                    <h3>Account</h3>
                    <ul>
                        <li><a href="/login">Login / Register</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/wishlist">Wishlist</a></li>
                        <li><a href="/shop">Shop</a></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/refund-policy">Refund Policy</a></li>
                        <li><a href="/terms">Terms of Use</a></li>
                        <li><a href="/faqs">FAQs</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Download App */}
                <div>
                    <h3>Download App</h3>
                    <p>Save $3 with App & New User Only</p>
                    <div className="app-buttons">
                        <a href="#" className="app-store"><SiAppstore /> App Store</a>  
                         <br/>
                        <a href="#" className="google-play"><SiGoogleplay /> Google Play</a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>© 2025. All rights reserved by Primip.</p>
                <div className="payments">
                    <span>We Accept:</span>
                    <Image
                        src={master}
                        alt="MasterCard"
                    />
                    <Image
                        src={visa}
                        alt="visa"

                    />

                    <Image
                        src={paypal}
                        alt="paypal"
                    />
                    <Image

                        src={american}
                        alt="american"
                    />

                    <Image

                        src={websten}
                        alt="websten"
                    />
                    {/* <img src={master} alt="MasterCard" />
                    <img src={visa} alt="Visa" />
                    <img src={paypal} alt="PayPal" />
                    <img src={american} alt="American Express" />
                    <img src={websten} alt="Discover" /> */}

                </div>
            </div>
        </footer>
    );
}
