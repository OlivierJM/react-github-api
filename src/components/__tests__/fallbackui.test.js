import React from "react"
import { shallow } from "enzyme"
import FallbackUI from "../FallbackUI"

const wrapper = shallow(<FallbackUI />)

describe("The fallback UI component", () => {
  it("contains a paragraph", () => {
    const pUI = <p>loading ...</p>
    expect(wrapper.contains(pUI))
  })
  it("should contain a flex-center class", () => {
    expect(wrapper.find(".flex-center")).toHaveLength(1)
  })
})
