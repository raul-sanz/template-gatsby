import React from "react";
import { useQuery } from "@apollo/client";
import { CommitsQuery } from "../queries/queries";
import Commit from "../components/Commit";

const IndexPage = () => {
  const { loading, error, data } = useQuery(CommitsQuery);
  if (loading) return <div className="text-center w-full">Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <main className="flex justify-center items-center h-full">
      <section className="w-1/2 h-1/2">
        {!loading &&
          data &&
          data.viewer.repository.ref.target.history.edges.map((el, index) => (
            <Commit key={index} data={el} />
          ))}
      </section>
    </main>
  );
};

export default IndexPage;
