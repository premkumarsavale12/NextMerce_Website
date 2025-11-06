import "../subscribeBanner/subscribeBanner.css"

const SubscribeBanner = () => {
  return (
    <div className="banner">
      <div className="left">
        <h2>Don't Miss Out Latest Trends & Offers</h2>
        <p>Register to receive news about the latest offers & discount codes</p>
      </div>
      <form className="right">
        <input
          type="email"
          placeholder="Enter your email"
          className="input"
        />
        <button type="submit" className="button">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeBanner;
