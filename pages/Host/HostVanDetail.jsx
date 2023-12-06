import { useState, useEffect } from "react";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";
import { getHostVans } from "../../api";

const HostVanDetail = () => {
  const [vanDetail, setVanDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans(id);
        setVanDetail(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  const style = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {vanDetail && (
        <div className="host-van-detail-container">
          <div className="host-van-detail">
            <img src={vanDetail.imageUrl} />
            <div className="van-info-desc">
              <div className={`van-type ${vanDetail.type} selected`}>
                {vanDetail.type}
              </div>
              <div>
                <h2>{vanDetail.name}</h2>
                <p className="van-price">
                  <span>${vanDetail.price}</span>/day
                </p>
              </div>
            </div>
          </div>
          <div className="host-van-detail-link-desc">
            <nav className="host-van-detail-link">
              <NavLink
                to="."
                end
                style={({ isActive }) => (isActive ? style : null)}
              >
                Details
              </NavLink>
              <NavLink
                to="pricing"
                style={({ isActive }) => (isActive ? style : null)}
              >
                Pricing
              </NavLink>
              <NavLink
                to="photos"
                style={({ isActive }) => (isActive ? style : null)}
              >
                Photos
              </NavLink>
            </nav>
            <Outlet context={{ vanDetail }} />
          </div>
        </div>
      )}
    </section>
  );
};

export default HostVanDetail;
