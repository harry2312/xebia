import React from "react";
import Home from "../../containers/Home";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("Home Container", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<Home />)).toMatchSnapshot();
  });
});
