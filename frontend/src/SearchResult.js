class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;
  $searchResultText = null;

  constructor({ $target, initialData, onClick, onNextPage }) {
    const $wrapper = document.createElement("section");

    this.$searchResult = document.createElement("ul");
    this.$searchResult.className = "SearchResult";
    this.$searchResultText = document.querySelector(".search-result-text");

    $target.appendChild($wrapper);
    $wrapper.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;
    this.onNextPage = onNextPage;

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

  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  applyEventToElement = (items) => {
    document.addEventListener("scroll", () => {
      items.forEach((el, index) => {
        if (this.isElementInViewport(el) && items.length - 1 === index) {
          this.onNextPage();
        }
      });
    });
  };

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

      let listItems = this.$searchResult.querySelectorAll(".item");
      this.applyEventToElement(listItems);
    }
  }
}
