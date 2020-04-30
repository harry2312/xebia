import axios from "axios";

export function loginApi(name) {
  return axios
    .get(`https://swapi.dev/api/people/?search=${name}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res)
    .catch((err) => err.response);
}

export function searchPlanetsApi(name) {
  return axios
    .get(`https://swapi.dev/api/planets/?search=${name}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res)
    .catch((err) => err.response);
}
