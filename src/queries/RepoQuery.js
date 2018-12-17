import gql from "graphql-tag"

const GET_REPOS = gql`
  query GETREPOS($login: String!) {
    user(login: $login) {
      name
      organizations {
        totalCount
      }
      avatarUrl
      location
      repositories(
        first: 100
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
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
`

export { GET_REPOS }
