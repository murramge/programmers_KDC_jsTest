class DarkmodeToggle {
  isDarkMode = null;
  constructor({ $target }) {
    const $wrapper = document.createElement("section");
    const $DarkModeToggle = document.createElement("input");
    this.$DarkModeToggle = $DarkModeToggle;
    this.$DarkModeToggle.type = "checkbox";

    $DarkModeToggle.className = "DarkModeToggle";
    $target.appendChild($wrapper);
    $wrapper.appendChild($DarkModeToggle);

    $DarkModeToggle.addEventListener("change", (e) => {
      this.setColorMode(e.target.checked);
    });
    this.initColorMode();
  }
  initColorMode() {
    //초기화 (isDarkMode state, checkbox 상태)
    this.isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.$DarkModeToggle.checked = this.isDarkMode;
    this.setColorMode(this.isDarkMode);
  }

  setColorMode(DarkMode) {
    document.documentElement.setAttribute(
      "color-mode",
      DarkMode ? "dark" : "light"
    );
  }

  render() {}
}
