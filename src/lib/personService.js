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

export const filterTable = (keys, rows, route) => {
  // switch(route){
    if(keys !== undefined){
      for (let i = 0; i < keys.length; i++) {
        if(keys[i] === route){
          console.log("rows",rows)
          console.log("keys[i]",keys[i])
            return rows.sort(function(item) {
              console.log("item", item)
             if( item[keys[i]] !== undefined){
               console.log("item[keys[i]]",item[keys[i]].toString())
                return item[keys[i]].toString()
              }
              else{
                return "";
              }
            })
        }
      }
    }
    // case '/id':
    //   return list.sort(item=>item.id);
    // case '/complete':
    //   return list.filter(item => item.isComplete)
    // default:
      return rows
  // }
}