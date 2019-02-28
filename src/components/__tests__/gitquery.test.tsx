import React from "react"
import { shallow, mount } from "enzyme"
import { MockedProvider } from "react-apollo/test-utils"
import { ApolloProvider } from "react-apollo"
import { Repos } from "../GitQuery"
import client from "../../index"
import { GET_REPOS } from "../../queries/RepoQuery"

const mocks = [
  {
    request: {
      query: GET_REPOS,
      variables: {
        name: "olivier",
      },
    },
    result: {
      data: {
        user: { id: "1", name: "olivier" },
      },
    },
  },
]

describe("The Query component ", () => {
  const wrapper = mount(
    <ApolloProvider client={client}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Repos login="olivier" />
      </MockedProvider>
    </ApolloProvider>
  )
  it("should render and have the proper value", () => {
    expect(wrapper.find({ login: "olivier" }))
  })
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
  it("should have a card class", () => {
    expect(wrapper.exists(".row")).toEqual(true)
    expect(wrapper.find(".card").exists()).toEqual(true)
  })
})
