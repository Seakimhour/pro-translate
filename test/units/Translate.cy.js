import { translateAPI } from "/src/js/translate.js"

describe('Translate', () => {
  it('can translate text with google API', async () => {
    let translateText = await translateAPI("test", "en", "ja")
    expect(translateText[0][0][0]).to.equal("テスト")
  })
})