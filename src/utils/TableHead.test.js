import { render, Simulate, wait, cleanup } from "react-testing-library";
import React from "react";
import "jest-dom/extend-expect";
import { TableHead } from "../components/table/TableHead";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

const keys = ["header 1", "header 2", "header 3", "header 4"];

describe("TableHead", () => {
  it("find first key from keys", () => {
    const { getByText, getByTestId, container } = render(
      <table>
        <thead>
          <TableHead keys={keys} />
        </thead>
        <tbody />
      </table>
    );
    const elem = getByTestId("header 1");
    expect(elem.innerHTML).toBe("header 1");
  });
});
