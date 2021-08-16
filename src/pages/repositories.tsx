import * as React from "react";
import { graphql } from "gatsby";
import Repository from "../components/Repository";

const RepositoriesPage = ({ data }) => {
  
  return (
    <main className="flex justify-center items-center h-full">
      <section className="w-1/2 h-2/3 grid grid-cols-2 gap-4">
        {data.github.viewer.repositories.nodes.map((el, index) => (
          <Repository key={index} data={el} />
        ))}
      </section>
    </main>
  );
};

export const query = graphql`
  query {
    github {
      viewer {
        repositories(first: 10) {
          nodes {
            id
            description
            name
            createdAt
            stargazerCount
            url
            languages(first: 5) {
              nodes {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;

export default RepositoriesPage;
