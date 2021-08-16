import React from "react";
import Language from "./Language";
//@ts-ignore
import Repo from "../images/repository_color.png";
const Repository = ({ data }) => {
  return (
    <div className="border border-gray-200  rounded-lg p-4 shadow-sm">
      <div className="flex">
        <img src={Repo} />{" "}
        <a
          target="_blank"
          href={data.url}
          className="font-bold text-gray-600 hover:underline"
        >
          {data.name}
        </a>
      </div>
      <p className="text-gray-400">{data.description}</p>

      <div className="flex">
        {data.languages.nodes.map((el, index) => (
          <Language key={index} info={el} />
        ))}
      </div>
    </div>
  );
};

export default Repository;
