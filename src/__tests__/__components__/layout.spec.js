import React from "react";
import Layout from "../../components/Layout";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("Layout Component", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<Layout />)).toMatchSnapshot();
  });
});
