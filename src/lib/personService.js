const baseUrl = "http://localhost:8080/todos";

export const getAll = () => {
  return fetch(baseUrl).then(res => res.json());
};