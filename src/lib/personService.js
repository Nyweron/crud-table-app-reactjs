const baseUrl = "http://localhost:8081/person";

export const getAll = () => {
  return fetch(baseUrl).then(res => res.json());
};

export const getKeyFromJson = () => {
  let obj = getAll().then(function(res) {
    let keys = Object.keys(res[0]);
    return keys;
  });
  return obj;
};

export const createPerson = person => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(person)
  }).then(res => res.json());
};

export const filterTable = (keys, rows, route, isSort) => {
  if (keys === undefined) {
    return rows;
  }

  const keysLength = keys.length;
  for (let i = 0; i < keysLength; i++) {
    if (keys[i] === route) {
      return rows.sort(function(current, next) {
        let x = current[keys[i]];
        let y = next[keys[i]];
        if (isSort) {
          return sortDescending(x, y);
        } else {
          return sortAscending(x, y);
        }
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