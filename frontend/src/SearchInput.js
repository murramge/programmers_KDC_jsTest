const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onRandom }) {
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
      const randomArray = ["a", "b", "c", "d", "e", "f"];
      const randomValue =
        randomArray[Math.floor(Math.random() * randomArray.length)];
      console.log(randomValue);
      onSearch(randomValue);
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
