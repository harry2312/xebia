import React from "react";
import NavigationItems from "../../components/NavigationItems";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("Button Component", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<NavigationItems />)).toMatchSnapshot();
  });
});
