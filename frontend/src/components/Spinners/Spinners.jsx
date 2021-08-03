import SyncLoader from "react-spinners/SyncLoader";
import ClipLoader from "react-spinners/ClipLoader";
import React from "react";

import "./Spinners.css";

export const Spinner = () => {
  return (
    <div className="wikis-spinner-container">
      <SyncLoader color={"#63aaa1"} />
    </div>
  );
};

export const ClipSpinner = () => {
  return (
    <div className="wikis-spinner-container">
      <ClipLoader color={"#63aaa1"} size={50} />
    </div>
  );
};
