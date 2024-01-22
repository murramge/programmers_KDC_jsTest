const API_ENDPOINT = "http://localhost:4001";
const $loadingSpineer = document.querySelector(".loading-spinner");
let loading = false;
const api = {
  fetchCats: (keyword) => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then((res) => {
      return res.json();
    });
  },
  fetchCatsPage: (keyword, page) => {
    return fetch(
      `${API_ENDPOINT}/api/cats/search?q=${keyword}&page=${page}`
    ).then((res) => {
      return res.json();
    });
  },
  fetchCatsRandom: () => {
    return fetch(`${API_ENDPOINT}/api/cats/random50`).then((res) => {
      return res.json();
    });
  },
  fetchCatsDetail: (id) => {
    return fetch(`${API_ENDPOINT}/api/cats/${id}`).then((res) => res.json());
  },
};
