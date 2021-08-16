import { useQuery } from "@apollo/client";
import { Link } from "gatsby";
import React, { ReactNode } from "react";
//@ts-ignore
import Commit from "../images/commit.png";
//@ts-ignore
import Github from "../images/github.png";
//@ts-ignore
import Repo from "../images/repository.png";
import { BasicInfoQuery } from "../queries/queries";
import RouterItem from "./RouteItem";

const Routes = [
  {
    label: "Commits",
    route: "/",
    description: "Show commits list for this repo",
    icon: Commit,
  },
  {
    label: "Repositories",
    route: "/repositories",
    description: "Show my reposotories list",
    icon: Repo,
  },
  {
    label: "Profile",
    route: "/profile",
    description: "Show profile info",
    icon: Github,
  },
];

const Layout = ({ children }: { children: ReactNode }) => {
  const { loading, error, data } = useQuery(BasicInfoQuery);

  return (
    <main className="flex h-screen w-screen">
      <section className="w-1/6 bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center">
        <div className="bg-gray-200 rounded-md p-10 shadow-lg">
          {!loading && data ? (
            <div className="border-b-2 border-gray-600">
              <div className="flex justify-center">
                <img
                  className="w-20 h-20 rounded-full"
                  src={data.viewer.avatarUrl}
                />
              </div>
              <div className="text-center">
                <p>{data.viewer.login}</p>
              </div>
            </div>
          ) : (
            <div>loading</div>
          )}

          <h3 className=" font-bold pt-4 text-center">Menu </h3>
          <ul>
            {Routes.map((el, index) => (
              <li className="my-4 " key={index}>
                <RouterItem to={el.route}>
                  <img className="mx-1" src={el.icon} />
                  {el.label}
                </RouterItem>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="w-5/6 h-full">{children}</section>
    </main>
  );
};

export default Layout;
