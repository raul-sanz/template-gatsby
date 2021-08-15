import * as React from "react";
import { graphql } from "gatsby";

const ProfilePage = ({ data }) => {
  React.useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <main>
      <p className="text-red-700">perfil</p>
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
        followers(first: 10) {
          nodes {
            login
          }
        }
      }
    }
  }
`;

export default ProfilePage;
