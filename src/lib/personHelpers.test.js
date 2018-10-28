import { findById } from "./personHelpers";

test("findById should find object by id from list", () => {
  const startPersons = [
    {
      id: 1,
      firstName: "Tom",
      lastName: "Cat",
      age: 10,
      isActive: true,
      hobby: "Bike"
    },
    {
      id: 2,
      firstName: "Jerry",
      lastName: "Mouse",
      age: 11,
      isActive: true,
      hobby: "Sleep"
    }
  ];
  const id = 1;
  const expected = {
    id: 1,
    firstName: "Tom",
    lastName: "Cat",
    age: 10,
    isActive: true,
    hobby: "Bike"
  };

  const result = findById(startPersons, id);
  expect(result).toEqual(expected);
});
