import uniqueArray from "../utils/uniqueArray";

describe("uniqueArray.js", () => {
  test("중복 제거 확인 number", () => {
    expect(uniqueArray([0, 1, 1])).toStrictEqual([0, 1]);
  });
  test("중복 제거 확인 string", () => {
    expect(uniqueArray(["가", "나", "나", "다"])).toStrictEqual([
      "가",
      "나",
      "다",
    ]);
  });
});

//테스트 대상을 import하고.
//test중복 처리 로직을 구현
//앱이 확장되거나, 변경사항이 일어났을 때 검증이 한꺼번에 되어야 하기에 테스트들을 적절히 이용
