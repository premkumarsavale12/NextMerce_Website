
import "../mail_successfull/mail_successfull.css"
export default function NotFound() {
    return (
        <div className="notfound-container">


            <div className="notfound-main">
                <h1 className="digit">Successful!</h1>
                <h2 className="sorry">Your message sent successfully</h2>
                <p className="description">
                  Thank you so much for your message. We check e-mail frequently <br/> and will try our best to respond to your inquiry.
                </p>

                <button className="back-btn">Back to Home</button>
            </div>
        </div>
    );
}
