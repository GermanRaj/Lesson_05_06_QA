import {calculatePasswordStrength} from "../src/calculatePasswordStrenght";

test("Received Password of 3 digits is weak", () => {
    expect(calculatePasswordStrength("111")).toBe("Very Weak");
})

test("Received Password of 3 symbols lowercase is weak", () => {
    expect(calculatePasswordStrength("qwe")).toBe("Very Weak");
})

test("Received password with length 5 where (2 lowercase + 2 uppercase and 1 digit) is Weak", () => {
    expect(calculatePasswordStrength("AzSq1")).toBe("Weak");
})

test("Received password with length 8 where (4 uppercase + 4 lowercase)  is Weak", () => {
    expect(calculatePasswordStrength("QwErTyUi")).toBe("Weak");
})

test("Received password with length 11 (where 4 uppercase + 4 lowercase and  3 digits) is Moderate", () => {
    expect(calculatePasswordStrength("QwErTyUi123")).toBe("Moderate");
})

test("Received password with length 12 (where 6 uppercase + 6 lowercase)  is Moderate", () => {
    expect(calculatePasswordStrength("QwErTyUiAlPw")).toBe("Moderate");
})

test("Received password with length 15 ( where 4 uppercase + 8 lowercase  and 3 digits)  is Strong", () => {
    expect(calculatePasswordStrength("AsdZxcQweAsd123")).toBe("Strong");
})

test("Received password with length 16 (where 8 uppercase + 7 lowercase and 1 digit)  is Strong", () => {
    expect(calculatePasswordStrength("QwErTyUiOpAsDfG1")).toBe("Strong");
})




