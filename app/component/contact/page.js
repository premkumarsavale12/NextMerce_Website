import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import "../contact/contact.css"
export default function Contact() {
    return (
        <div className="contact-wrapper">
            <h2 className="section-title">Contact</h2>
            <div className="contact-container">



                <div className="contact-left">
                    <h4 className="contact-heading">Contact Information</h4>
                    <div className="contact-item">
                        <MdOutlineEmail className="contact-icon" />
                        <p>Email: jamse@example.com</p>
                    </div>
                    <div className="contact-item">
                        <CiPhone className="contact-icon" />
                        <p>Phone: 1234 567890</p>
                    </div>
                    <div className="contact-item">
                        <FaLocationDot className="contact-icon" />
                        <p>Address: 7398 Smoke Ranch Road<br />Las Vegas, Nevada 89128</p>
                    </div>
                    <hr className="divider" />
                </div>


                <div className="contact-right">
                    <form className="contact-form">
                        <div className="form-row">
                            <input type="text" placeholder="First Name *" required />
                            <input type="text" placeholder="Last Name *" required />
                        </div>
                        <div className="form-row">
                            <input type="text" placeholder="Subject" />
                            <input type="tel" placeholder="Phone" />
                        </div>
                        <textarea placeholder="Message" rows="5"></textarea>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
