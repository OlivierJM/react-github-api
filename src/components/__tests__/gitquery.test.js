import React from "react"
import TestRenderer from "react-test-renderer"
import { Repos } from "../GitQuery"

const wrapper = TestRenderer.create(<Repos login="olivier" />).root

describe("The Query component ", () => {
  it("should render correctly", () => {
    //   expect(wrapper)
    //     .find(".row")
    //     .exists()
    //     .toBe(true)
    // })
    expect(wrapper.props).toBe({ login: "olivier" })

    // it('renders correctly', () => {
    // const tree = renderer
    //   .create(<Link page="http://www.instagram.com">Instagram</Link>)
    //   .toJSON()
    // expect(tree).toMatchSnapshot()
  })
})
