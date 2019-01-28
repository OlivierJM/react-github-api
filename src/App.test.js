import React from "react"
import { shallow } from "enzyme"
import App from "./App"

describe("The App component", () => {
  it("exists", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists).toBe(true)
  })
})
