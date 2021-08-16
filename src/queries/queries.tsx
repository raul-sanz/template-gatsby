import { gql } from "@apollo/client";

export const CommitsQuery = gql`
  query Commits {
    viewer {
      repository(name: "template-gatsby") {
        ref(qualifiedName: "master") {
          target {
            ... on Commit {
              history(first: 5) {
                edges {
                  node {
                    messageHeadline
                    commitUrl
                    abbreviatedOid
                    committedDate
                    author{
                      user{
                        login
                        avatarUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const BasicInfoQuery = gql`
  query BasicInfoQuery {
    viewer {
      login
      bio
      avatarUrl
    }
  }
`;