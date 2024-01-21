const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onRandomSearch }) {
    const $wrapper = document.createElement("section");
    const $searchInput = document.createElement("input");
    const $randombutton = document.createElement("button");

    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이 검색해보세요.|";
    $searchInput.className = "SearchInput";
    $randombutton.className = "random-button";
    $randombutton.textContent = "랜덤버튼";

    $target.appendChild($wrapper);
    $wrapper.appendChild($searchInput);
    $wrapper.appendChild($randombutton);

    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
        let searchInputdata = localStorage.getItem("searchInputData");
        if (!searchInputdata) {
          localStorage.setItem("searchInputData", e.target.value);
        } else {
          localStorage.setItem(
            "searchInputData",
            searchInputdata + "," + e.target.value
          );
        }
      }
    });

    let searchInputdata = localStorage.getItem("searchInputData");

    const addEvent = (className, text) => {
      className.addEventListener("click", () => {
        onSearch(text);
      });
    };

    const keyWordText = () => {
      if (searchInputdata) {
        searchInputdata = [...new Set(searchInputdata.split(","))];
        if (searchInputdata.length >= 5) {
          console.log(searchInputdata);
          searchInputdata = searchInputdata.slice(searchInputdata.length - 5);
          searchInputdata.map((text, index) => {
            if (index < 5) {
              const $keywordContent = document.createElement("span");
              $target.appendChild($keywordContent);
              $keywordContent.className = "keyword";
              $keywordContent.textContent = text;
              addEvent($keywordContent, text);
            }
          });
        }
      }
    };
    keyWordText();
    $randombutton.addEventListener("click", (e) => {
      onRandomSearch();
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
