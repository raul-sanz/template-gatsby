import React from "react";
import { useQuery } from "@apollo/client";
import { CommitsQuery } from "../queries/CommitsQuery";

const IndexPage = () => {
  const { loading, error, data } = useQuery(CommitsQuery);
  console.log(data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return <div>Index</div>;
};

export default IndexPage;
