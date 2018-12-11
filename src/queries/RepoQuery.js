import gql from "graphql-tag";

const GET_REPOS = gql`
  query GETREPOS($login: String!) {
    user(login: $login) {
      repositoriesContributedTo(last: 5) {
        totalCount
        nodes {
          name
        }
      }
      repositories(first: 50, orderBy: { field: STARGAZERS, direction: DESC }) {
        totalCount
        nodes {
          name
          url
          description
          isFork
          stargazers(last: 5) {
            totalCount
          }
        }
      }
    }
  }
`;

export { GET_REPOS }