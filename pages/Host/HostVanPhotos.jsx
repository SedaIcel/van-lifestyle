import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { vanDetail } = useOutletContext();

  return (
    <div className="host-van-photos">
      <img
        src={vanDetail.imageUrl}
        alt={vanDetail.name}
        className="host-van-detail-image"
      />
    </div>
  );
};

export default HostVanPhotos;
