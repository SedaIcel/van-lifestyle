import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { vanDetail } = useOutletContext();
  console.log(vanDetail);
  return (
    <div className="host-van-info">
      <p>
        <span>Name:</span>
        {vanDetail.name}
      </p>
      <p>
        <span>Category:</span>
        {vanDetail.type}
      </p>
      <p>
        <span>Description:</span>
        {vanDetail.description}
      </p>
      <p>
        <span>Visibility:</span>Public
      </p>
    </div>
  );
};

export default HostVanInfo;
