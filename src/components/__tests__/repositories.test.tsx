import * as React from "react"
import { mount } from "enzyme"
import Repositories from "../Repositories"

describe("repository component", () => {
  const repos = mount(<Repositories />)
  it("should match snapshot", () => {
    expect(repos).toMatchSnapshot()
  })
  //   I will add more tests here
})
