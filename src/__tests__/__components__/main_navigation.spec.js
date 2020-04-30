import React from "react";
import MainNavigation from "../../components/MainNavigation";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("Button Component", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<MainNavigation />)).toMatchSnapshot();
  });
});
