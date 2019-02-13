import React from "react"
import TestRenderer from "react-test-renderer"
import { Repos } from "../GitQuery"

const wrapper = TestRenderer.create(<Repos login="olivier" />).root

describe("The Query component ", () => {
  it("should render correctly", () => {
    expect(wrapper.props).toBe({ login: "olivier" })
  })
})
