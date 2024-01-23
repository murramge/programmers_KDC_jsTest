import api from "./api";
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
  }

  //async await 적용
  async showDetail(data) {
    const detailinfo = await api.fetchCatsDetail(data.cat.id);
    if (detailinfo) {
      this.setState({
        visible: true,
        cat: detailinfo.data,
      });
    }
  }

  closeImageInfo() {
    console.log("닫기");
    this.setState({
      visible: false,
      cat: undefined,
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

      //keypress, keydown, keyup 차이점
      document.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
          this.closeImageInfo();
        }
      });

      this.$imageInfo.addEventListener("click", (e) => {
        if (
          e.target.className === "ImageInfo" ||
          e.target.className === "close"
        ) {
          this.closeImageInfo();
        }
      });
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}

export default ImageInfo;

//실무에서는 TODO: 이런 형식으로 달아놓긴 함.
