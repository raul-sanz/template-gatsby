import * as React from "react";
import { graphql } from "gatsby";
// markup
const IndexPage = ({ data }) => {
  React.useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <main>
      <p className="text-red-700">hola</p>
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

export default IndexPage;
