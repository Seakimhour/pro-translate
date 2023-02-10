import { expect, test } from "vitest";
import { translateAPI } from "../src/js/translate.js";

test("Translate API", async () => {
  let translateText = await translateAPI("test", "en", "ja");
  expect(translateText[0][0][0]).toBe("テスト");
});
