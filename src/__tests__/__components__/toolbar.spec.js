import React from "react";
import Toolbar from "../../components/Toolbar";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("Toolbar Component", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<Toolbar />)).toMatchSnapshot();
  });
});
