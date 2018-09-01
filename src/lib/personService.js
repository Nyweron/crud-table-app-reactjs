const baseUrl = "http://localhost:8080/person";

export const getAll = () => {
  return fetch(baseUrl).then(res => res.json());
};

export const getKeyFromJson = () => {
  let obj = getAll().then(function(res){
      console.log(res);
      let keys = Object.keys(res[0]);
      console.log("key",keys);
      return keys;
    });
  return obj
};