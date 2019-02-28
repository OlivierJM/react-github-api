import * as React from "react"
import { shallow, mount } from "enzyme"
import Profile from "../Profile"

describe("Profile component", () => {
  const profile = mount(
    <Profile name="olivier" orgs={1} location="lsk" totalCount={10} />
  )
  it("should match the snapshot", () => {
    expect(profile).toMatchSnapshot()
  })
  it("should render proper props", () => {
    expect(profile.prop("orgs")).toEqual(1)
  })
  it("should contain the profile classs", () => {
    expect(profile.find(".profile").exists()).toBe(true)
  })
})
// expect(nav.findWhere(el => el.is(NavItem) && el.prop('url') === '/login').length).toEqual(1)
