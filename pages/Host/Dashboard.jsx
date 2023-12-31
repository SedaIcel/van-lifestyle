import React from "react";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="host-dashboard-container">
      <div className="host-dashboard-income">
        <h1>Welcome!</h1>
        <div className="host-dashboard-income-detail">
          <p>
            Income last <span>30 days</span>
          </p>
          <Link to="income">Details</Link>
        </div>
        <h2>$2,260</h2>
      </div>
      <div className="host-dashboard-review">
        <div className="host-dashboard-review-detail">
          <div className="host-dashboard-review-score">
            <h1>Review Score</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
            >
              <path
                d="M9.30123 0.843597C9.64795 -0.117224 11.0068 -0.117225 11.3535 0.843596L13.0595 5.57118C13.2156 6.0036 13.6259 6.2918 14.0856 6.2918H19.3421C20.4264 6.2918 20.8467 7.70205 19.9393 8.29562L15.8905 10.9443C15.4675 11.221 15.29 11.7521 15.4615 12.2275L17.0532 16.6383C17.4087 17.6236 16.3064 18.495 15.4298 17.9215L10.9246 14.9743C10.5618 14.737 10.0929 14.737 9.73015 14.9743L5.22489 17.9215C4.34834 18.495 3.24599 17.6236 3.60154 16.6383L5.19321 12.2275C5.36479 11.7521 5.18728 11.221 4.76429 10.9443L0.715395 8.29562C-0.191962 7.70205 0.228344 6.2918 1.31261 6.2918H6.56909C7.0288 6.2918 7.43919 6.0036 7.59523 5.57118L9.30123 0.843597Z"
                fill="#FF8C38"
              />
            </svg>
            <p>
              <span>5.0</span>/5
            </p>
          </div>
          <Link to="reviews">Details</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
