import React from "react"
import { shallow, mount } from "enzyme"
import { MockedProvider } from "react-apollo/test-utils"
import { Repos } from "../GitQuery"
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
  const mountedWrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Repos login="olivier" />
    </MockedProvider>
  )
  it("should render and have the proper value", () => {
    expect(mountedWrapper.find({ login: "olivier" })).toBe(true)
  })
  it("should match the snapshot", () => {
    expect(mountedWrapper).toMatchSnapshot()
  })
  it("should have a card class", () => {
    expect(mountedWrapper.exists(".row")).toEqual(true)
    expect(mountedWrapper.find(".card").exists()).toEqual(true)
  })
})
