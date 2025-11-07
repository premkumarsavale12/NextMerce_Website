import "../app/not_found.css";

export default function NotFound() {
  return (
    <div className="notfound-container">


      <div className="notfound-main">
        <h1 className="digit">404</h1>
        <h2 className="sorry">Sorry, the page can’t be found</h2>
        <p className="description">
          The page you were looking for appears to have been <br /> moved,
          deleted, or does not exist.
        </p>

        <button className="back-btn">Back to Home</button>
      </div>
    </div>
  );
}
