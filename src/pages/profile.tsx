import * as React from "react";
import { graphql } from "gatsby";
import Follow from "../components/Follow";

const ProfilePage = ({ data }) => {
  React.useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <main className="flex justify-center items-center h-full">
      <section className="w-1/2 h-1/2 shadow-xl">
        <div className="flex justify-center mt-3">
          <img
            className="rounded-full w-1/4"
            src={data.github.viewer.avatarUrl}
            alt=""
          />
        </div>
        <p className="font-bold text-center text-gray-700 text-xl mt-4">
          {data.github.viewer.login}
        </p>
        <div className="flex justify-center">
          <a
            target="_blank"
            href={data.github.viewer.url}
            className="bg-blue-400 hover:bg-blue-600 text-white rounded-full p-2 "
          >
            {" "}
            Ver en GitHub
          </a>
        </div>
        <p className="font-bold text-center text-gray-400  mt-4">
          {data.github.viewer.bio}
        </p>
        <p className="font-bold text-center italic text-gray-500  mt-4">
          {data.github.viewer.location}
        </p>
        <div className="flex justify-around mt-3">
          <div>
            <Follow label="Followers" info={data.github.viewer.followers} />
          </div>
          <div>
            <Follow label="Following" info={data.github.viewer.following} />
          </div>
        </div>
      </section>
    </main>
  );
};

export const query = graphql`
  query {
    github {
      viewer {
        login
        avatarUrl
        bio
        email
        name
        url
        location
        following(first: 10) {
          nodes {
            login
            avatarUrl
          }
        }
        followers(first: 10) {
          nodes {
            login
            avatarUrl
          }
        }
      }
    }
  }
`;

export default ProfilePage;
