import React from "react";
import Button from "../../components/Button";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("Button Component", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<Button />)).toMatchSnapshot();
  });
});
