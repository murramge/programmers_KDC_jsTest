const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onRandomSearch }) {
    const $searchInput = document.createElement("input");
    const $randombutton = document.createElement("button");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이 검색해보세요.|";
    $searchInput.className = "SearchInput";
    $randombutton.className = "random-button";
    $randombutton.textContent = "랜덤버튼";
    $target.appendChild($searchInput);
    $target.appendChild($randombutton);
    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });
    $randombutton.addEventListener("click", (e) => {
      onRandomSearch();
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
