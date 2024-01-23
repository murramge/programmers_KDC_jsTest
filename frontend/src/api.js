const API_ENDPOINT = "http://localhost:4001";
const REQUEST_ERROR = {
  500: { msg: "요청실패" },
};
const request = async (url) => {
  try {
    const result = await fetch(url);
    console.dir(result.status);
    if (result.status == 200) {
      return result.json();
    } else {
      throw REQUEST_ERROR[result.status];
    }
  } catch (error) {
    console.log(error);
    alert(error.msg);
    return { data: null };
  }
};

const api = {
  fetchCats: (keyword) => {
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
  fetchCatsPage: (keyword, page) => {
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}&page=${page}`);
  },
  fetchCatsRandom: () => {
    return request(`${API_ENDPOINT}/api/cats/random50`);
  },
  fetchCatsDetail: (id) => {
    return request(`${API_ENDPOINT}/api/cats/${id}`);
  },
};
