const API_ENDPOINT = "http://localhost:4001";
const $loadingSpineer = document.querySelector(".loading-spinner");
let loading = false;
const api = {
  fetchCats: (keyword) => {
    if ($loadingSpineer.className.includes("v-none")) {
      $loadingSpineer.className = $loadingSpineer.className.replace(
        "v-none",
        "v-show"
      );
    }
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`)
      .then((res) => {
        return res.json();
      })
      .finally(() => {
        if ($loadingSpineer.className.includes("v-show")) {
          $loadingSpineer.className = $loadingSpineer.className.replace(
            "v-show",
            "v-none"
          );
        }
      });
  },
  fetchCatsRandom: () => {
    if ($loadingSpineer.className.includes("v-none")) {
      $loadingSpineer.className = $loadingSpineer.className.replace(
        "v-none",
        "v-show"
      );
    }
    return fetch(`${API_ENDPOINT}/api/cats/random50`)
      .then((res) => {
        return res.json();
      })
      .finally(() => {
        if ($loadingSpineer.className.includes("v-show")) {
          $loadingSpineer.className = $loadingSpineer.className.replace(
            "v-show",
            "v-none"
          );
        }
      });
  },
  fetchCatsDetail: (id) => {
    return fetch(`${API_ENDPOINT}/api/cats/${id}`).then((res) => res.json());
  },
};
