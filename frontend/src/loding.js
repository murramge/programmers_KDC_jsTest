class Loding {
  $loding = null;
  data = null;
  constructor({ $target }) {
    const $loding = document.createElement("div");
    this.$loding = $loding;
    $target.appendChild(this.$loding);

    this.data = {
      show: false,
    };

    this.render();
  }

  show() {
    this.setState({
      show: true,
    });
  }
  hide() {
    this.setState({
      show: false,
    });
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.show) {
      this.$loding.innerHTML = `<div class="Loding">
    <p>
    로딩중
    </p>
    </div>`;
    } else {
      this.$loding.innerHTML = "";
    }
  }
}
