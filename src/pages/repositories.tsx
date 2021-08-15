import * as React from "react";
import { graphql } from "gatsby";

const RepositoriesPage = ({ data }) => {
  React.useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <main>
      <p className="text-red-700">repositorios</p>
    </main>
  );
};

export const query = graphql`
  query {
    github {
      viewer {
        repositories(first: 50) {
          nodes {
            id
            name
          }
        }
      }
    }
  }
`;

export default RepositoriesPage;
