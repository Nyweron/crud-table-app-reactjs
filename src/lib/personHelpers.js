export const removeRowById = (list, id) => {
  console.log("removeRowById")
  const index = list.findIndex(x => x.id === id);
  if (index > -1) {
    list.splice(index, 1);
  }

  return list;
};

export const findById = (list, id) => list.find(x => x.id === id);

export const updateByObjectId = (list, updated) =>
  list.map(row => (row.id === updated.id ? updated : row));