console.log("app is running!");

class App {
  $target = null;
  data = [];
  page = 1;

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
          this.setState(data);
          this.Loding.hide();
          //로컬에 저장
          this.saveResult(data);
        });
      },
      onRandomSearch: () => {
        this.Loding.show();
        api.fetchCatsRandom().then(({ data }) => {
          this.Loding.hide();
          this.setState(data);
        });
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
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
        const page = this.page + 1;

        api.fetchCatsPage(keywordhistory[0], page).then(({ data }) => {
          let newData = this.data.concat(data);
          this.setState(newData);
          this.page = page;

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
    this.searchResult.setState(nextData);
  }

  saveResult(result) {
    localStorage.setItem("lastResult", JSON.stringify(result));
  }

  init() {
    const lastresult =
      localStorage.getItem("lastResult") === null
        ? []
        : JSON.parse(localStorage.getItem("lastResult"));

    this.setState(lastresult);
  }
}
