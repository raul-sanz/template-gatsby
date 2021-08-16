import React from "react";
//@ts-ignore
import Team from "../images/team.png";
const Follow = ({ info, label }) => {
  return (
    <div className="flex items-center border p-2 border-gray-400 rounded-md">
      <img src={Team} />
      <p className="ml-2">{label}</p>{" "}
      <p className="ml-2 font-bold">{info.nodes.length}</p>
    </div>
  );
};

export default Follow;
