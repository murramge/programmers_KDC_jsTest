function darkmodeGo() {
  const darkModeToggle = document.getElementById("dn");
  if (!darkModeToggle) {
    return !1;
  }
  const Realbody = document.querySelector("html");
  darkModeToggle.addEventListener("change", (e) => {
    if (!Realbody.classList.contains("darkmode")) {
      Realbody.classList.add("darkmode");
      localStorage.setItem("whatMode", darkModeToggle.checked);
    } else {
      Realbody.classList.remove("darkmode");
      localStorage.setItem("whatMode", darkModeToggle.checked);
    }
  });
}
darkmodeGo();
document.addEventListener("DOMContentLoaded", function () {
  const Realbody = document.querySelector("html");
  const whatMode = localStorage.getItem("whatMode"); //whatMode 아이템 값 불러오기

  if (whatMode === "false") {
    // 체크 여부가 false라면, 라이트모드입니다. 이 때 false는 문자열 타입이므로 "" 안에 적어야 합니다.
    return !1; // 라이트모드이므로 아무런 행동을 할 필요가 없습니다.
  } else {
    // 다크모드라면
    const darkModeToggle = document.getElementById("dn"); //체크박스를 획득
    darkModeToggle.checked = true; // 체크박스에 체크를 해주기
    Realbody.classList.add("darkmode"); // 다크모드를 body에 걸어주기
  }
});
