// Todos.test.js

import { render, Simulate, wait } from "react-testing-library";
import React from "react";
import "jest-dom/extend-expect";
import { TableHead } from "../components/table/TableHead";

const keys = ["header 1", "header 2", "header 3", "header 4"];

function sortColumn(item) {
  return item;
}

describe("TableHead", () => {
  it("find first key from keys", () => {
    const { getByText, getByTestId, container } = render(
      <table>
        <thead>
          <TableHead sortColumn={sortColumn} keys={keys} />
        </thead>
        <tbody />
      </table>
    );
    const elem = getByTestId("header 1");
    expect(elem.innerHTML).toBe("header 1");
  });
});
