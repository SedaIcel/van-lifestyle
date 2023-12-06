import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="/" className="not-found-button">
        Return to home
      </Link>
    </div>
  );
};

export default NotFound;
