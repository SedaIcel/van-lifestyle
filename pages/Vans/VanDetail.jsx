import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getVans } from "../../api";

export default function VanDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [van, setVan] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans(id);
        setVan(data);
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

  const type = location.state?.type || "all";
  const search = location.state?.search || "";
  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>{`Back to ${type} vans`}</span>
      </Link>
      {van && (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <div className="van-info-desc">
            <div className={`van-type ${van.type} selected`}>
              {van.type[0].toUpperCase() + van.type.slice(1)}
            </div>
            <div>
              <h2>{van.name}</h2>
              <p className="van-price">
                <span>${van.price}</span>/day
              </p>
            </div>
            <div className="van-desc">
              <p>{van.description}</p>
              <button className="link-button">Rent this van</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
