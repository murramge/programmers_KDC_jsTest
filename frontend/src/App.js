console.log("app is running!");

import Loding from "./loding.js";
import DarkmodeToggle from "./DarkmodeToggle";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
import ImageInfo from "./ImageInfo";
import api from "./api.js";

class App {
  $target = null;
  DEFAULT_PAGE = 1;
  //1. 데이터안에 페이지 넣기
  data = {
    items: [],
    page: this.DEFAULT_PAGE,
  };

  constructor($target) {
    this.$target = $target;

    this.Loding = new Loding({
      $target,
    });

    this.searchInput = new DarkmodeToggle({
      $target,
    });

    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword) => {
        this.Loding.show();
        api.fetchCats(keyword).then(({ data }) => {
          this.setState({
            items: data ? data : [],
            page: this.DEFAULT_PAGE,
          });
          this.Loding.hide();
          //로컬에 저장
          this.saveResult(data);
        });
      },
      onRandomSearch: () => {
        this.Loding.show();
        api.fetchCatsRandom().then(({ data }) => {
          this.Loding.hide();
          this.setState({
            items: data ? data : "",
            page: this.DEFAULT_PAGE,
          });
        });
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data.items,
      onClick: (cat) => {
        this.imageInfo.showDetail({
          visible: true,
          cat,
        });
      },
      onNextPage: () => {
        this.Loding.show();
        const keywordhistory =
          localStorage.getItem("keywordHistory") === null
            ? []
            : localStorage.getItem("keywordHistory").split(",");
        const page = this.data.page + 1;
        api.fetchCatsPage(keywordhistory[0], page).then(({ data }) => {
          let newData = this.data.items.concat(data);
          console.log(page);
          this.setState({
            items: newData,
            page: Number(page),
          });
          this.Loding.hide();
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });
    this.init();
  }

  setState(nextData) {
    this.data = nextData;
    this.searchResult.setState(nextData.items);
  }

  saveResult(result) {
    localStorage.setItem("lastResult", JSON.stringify(result));
  }

  init() {
    const lastresult =
      localStorage.getItem("lastResult") === null
        ? []
        : JSON.parse(localStorage.getItem("lastResult"));

    this.setState({
      items: lastresult,
      page: this.DEFAULT_PAGE,
    });
  }
}

export default App;
