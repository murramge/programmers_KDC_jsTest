const validator = require("../utils/validator");

describe("validator.js", () => {
  describe("isNumber(a: any)", () => {
    test("should return true when received number type argument.", () => {
      expect(validator.isNumber(1)).toBe(true);
    });

    test("should return false when received other type argument.", () => {
      expect(validator.isNumber("1")).toBe(false);
      expect(validator.isNumber([])).toBe(false);
    });
  });
});

//테스트를 할 때, __ __로 작성을 함.
//jest 를 다운받음
//jest.config 에 의해 설정이 됨.
//collectCoverageFrom에서 폴더별로 테스트 검사를 한다 경로임.
