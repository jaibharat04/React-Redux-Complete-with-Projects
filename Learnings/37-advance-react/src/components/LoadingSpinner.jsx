import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border"
        style={{ width: "7rem", height: "7rem", margin: "10% 0" }}
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
