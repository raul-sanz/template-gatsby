import React from "react";

const Language = ({ info }) => {
  return (
    <div className="flex items-center ml-2">
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: info.color }}
      ></div>
      <p className="ml-1">{info.name}</p>
    </div>
  );
};

export default Language;
