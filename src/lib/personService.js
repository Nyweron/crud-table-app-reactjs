const baseUrl = "http://localhost:8080/person";

export const getAll = () => {
  return fetch(baseUrl).then(res => res.json());
};

export const getKeyFromJson = () => {
  let obj = getAll().then(function(res){
      let keys = Object.keys(res[0]);
      return keys;
    });
  return obj
};

export const filterTable = (list, route) => {
  console.log("list",list);
  console.log("route",route);
  switch(route){
    case '/id':
      return list.sort(item=>item.id);
    case '/complete':
      return list.filter(item => item.isComplete)
    default:
      return list
  }
}