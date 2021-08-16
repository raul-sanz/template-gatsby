import React from "react";
import moment from "moment";
//@ts-ignore
import CommitIcon from "../images/commit_color.png";
const Commit = ({ data }) => {
  return (
    <div className=" flex items-center my-4">
      <div className="border border-gray-200 rounded-lg w-full p-2 flex justify-between">
        <div>
          <div>
            <h3 className="font-bold">{data.node.messageHeadline}</h3>
          </div>
          <div className="flex items-end">
            <img
              src={data.node.author.user.avatarUrl}
              className="w-8 rounded-full "
            />
            <p className="ml-3">{data.node.author.user.login}</p>
            <p className="ml-3 text-gray-400">
              {moment(data.node.committedDate).format("MMM dd, yyyy")}
            </p>
          </div>
        </div>
        <div>
          <a
            className="border rounded-lg p-1 bg-gray-200 hover:bg-gray-100 text-gray-500 flex"
            target="_blank"
            href={data.node.commitUrl}
          >
            <img src={CommitIcon} /> {data.node.abbreviatedOid}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Commit;
