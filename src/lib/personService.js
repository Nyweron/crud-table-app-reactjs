const baseUrl = "http://localhost:8081/person";

export const getAll = () => {
  console.log("getAll")
  return fetch(baseUrl).then(res => res.json());
};

export const getKeyFromJson = (rows) => {
  console.log("getKeyFromJson")
  if(rows !== null && rows.length > 0){
    return Object.keys(rows[0]);
  }
  return rows;
};

export const createPerson = person => {
  console.log("createPerson")
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(person)
  }).then(res => res.json());
};

export const deleteRow = id => {
  console.log("deleteRow")
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
};

export const filterTable = (keys, rows, route, isSort) => {
  if (keys === null || keys === undefined || keys.length === 0) {
    return rows;
  }

  console.log("filterTable2", keys)
  const keysLength = keys.length;
  for (let i = 0; i < keysLength; i++) {
    if (keys[i] === route) {
      return rows.sort(function(current, next) {
        let x = current[keys[i]];
        let y = next[keys[i]];

        if(typeof(x) === "string"){ x = x.toUpperCase(); }
        if(typeof(y) === "string"){ y = y.toUpperCase(); }

        if (isSort) { return sortDescending(x, y); }
        else { return sortAscending(x, y); }
      });
    }/*END if (keys[i] === route)*/
  } /*END for*/
  return rows;
};

function sortDescending(x, y){
  if (x > y || y === undefined) { return -1; }
  else if (x < y || x === undefined) { return 1; }
  else { return 0; }
}

function sortAscending(x, y){
  if (x < y || x === undefined) { return -1; }
  else if (x > y || y === undefined) { return 1; }
  else { return 0; }
}