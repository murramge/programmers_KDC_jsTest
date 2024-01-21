class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;
  $searchResultText = null;

  constructor({ $target, initialData, onClick }) {
    const $wrapper = document.createElement("section");

    this.$searchResult = document.createElement("ul");
    this.$searchResult.className = "SearchResult";
    this.$searchResultText = document.querySelector(".search-result-text");

    $target.appendChild($wrapper);
    $wrapper.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    if (nextData.length == 0) {
      if (this.$searchResultText.className.includes("v-none")) {
        this.$searchResultText.className =
          this.$searchResultText.className.replace("v-none", "v-show");
      }
    } else {
      if (this.$searchResultText.className.includes("v-show")) {
        this.$searchResultText.className =
          this.$searchResultText.className.replace("v-show", "v-none");
      }
    }
    this.render();
  }

  render() {
    const datas = this.data;
    if (datas.length) {
      this.$searchResult.innerHTML = this.data
        .map(
          (cat) => `
          <li class="item">
            <img src=${cat.url} alt=${cat.name} />
          </li>
        `
        )
        .join("");

      this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
        $item.addEventListener("click", () => {
          this.onClick(this.data[index]);
        });
      });
    }
  }
}
