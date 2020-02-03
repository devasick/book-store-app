import React from "react";
import { shallow } from "enzyme";
import { BookList } from "./BookList";

describe("Book data component renders with Enzyme", () => {
  it("renders without crashing", () => {
    shallow(<BookList />);
  });
});
