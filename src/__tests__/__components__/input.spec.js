import React from "react";
import Input from "../../components/Input";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("Button Component", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<Input />)).toMatchSnapshot();
  });
});
