const baseUrl = "http://localhost:8080/person";

export const getAll = () => {
  return fetch(baseUrl).then(res => res.json());
};