import React from "react";
import LogIn from "../../containers/Login";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("LogIn Container", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<LogIn />)).toMatchSnapshot();
  });
});
