class ImageInfo {
  $imageInfo = null;
  data = null;
  $close = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
    const $close = document.querySelector(".close");
    const $contentWrapper = document.querySelector(".content-wrapper");
    console.log($contentWrapper);
    $close.addEventListener("click", () => {
      this.data.visible = false;
      this.render();
    });
    this.$imageInfo.addEventListener("click", () => {
      this.data.visible = false;
      this.render();
    });
    // $contentWrapper.addEventListener("keyup", (e) => {
    //   console.log(e);
    //   if (e.keyCode == 27 || e.which == 27) {
    //     this.data.visible = false;
    //     this.render();
    //   }
    // });
  }

  showDetail(data) {
    api.fetchCatsDetail(data.cat.id).then(({ data }) => {
      this.setState({
        visible: true,
        cat: data,
      });
    });
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.cat;

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </div>`;
      this.$imageInfo.style.display = "block";
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
