// Todos.test.js

import { render, Simulate, wait } from "react-testing-library";
import React from "react";
import "jest-dom/extend-expect";
import { TableHead } from "../components/table/TableHead";

const keys = ["header 1", "header 2", "header 3", "header 4"];

function sortColumn(item) {
  return item;
}

describe("Todos", () => {
  it("finds title", () => {
    console.log("keys", keys);
    const { getByText, getByTestId, container } = render(
      <table>
        <thead>
          <TableHead sortColumn={sortColumn} keys={keys} />
        </thead>
        <tbody />
      </table>
    );
    const elem = getByTestId("item");
    expect(elem.innerHTML).toBe("header 1");
  });
});
