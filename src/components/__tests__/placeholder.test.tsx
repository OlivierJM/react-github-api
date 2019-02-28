import * as React from "react"
import { shallow } from "enzyme"
import PlaceHolder from "../PlaceHolder"

describe("PlaceHolder Component", () => {
  const pHolder = shallow(<PlaceHolder />)
  it("should should match the snapshot", () => {
    expect(pHolder).toMatchSnapshot()
  })
  it("should render correctly", () => {
    expect(pHolder.name()).toEqual("div")
  })
})
