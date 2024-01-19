class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;
  $searchResultText = null;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    this.$searchResultText = document.querySelector(".search-result-text");

    $target.appendChild(this.$searchResult);

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
    }
    this.render();
  }

  render() {
    const datas = this.data;
    console.log(datas);
    if (datas.length) {
      this.$searchResult.innerHTML = this.data
        .map(
          (cat) => `
          <div class="item">
            <img src=${cat.url} alt=${cat.name} />
          </div>
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
