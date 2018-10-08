export const removeRowById = (list, id) => {
  console.log("removeRowById")
  const index = list.findIndex(x => x.id === id);
  if (index > -1) {
    list.splice(index, 1);
  }

  return list;
};