import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

it("Should render without crashing", function () {
  render(<Box />);
});

it("Should match snapshot", function () {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

