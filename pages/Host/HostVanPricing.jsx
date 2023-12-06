import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { vanDetail } = useOutletContext();
  return (
    <div className="host-van-pricing">
      <p className="van-price">
        <span>${vanDetail.price}</span>/day
      </p>
    </div>
  );
};

export default HostVanPricing;
