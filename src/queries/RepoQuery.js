import gql from "graphql-tag"

const GET_REPOS = gql`
  query GETREPOS($login: String!) {
    user(login: $login) {
      name
      organizations {
        totalCount
      }
      # this will be used on the new page for user info
      contributionsCollection {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalRepositoriesWithContributedIssues
        totalRepositoriesWithContributedPullRequestReviews
        totalRepositoryContributions
        contributionCalendar {
          totalContributions
        }
      }
      # user image
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
