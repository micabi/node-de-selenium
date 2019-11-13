var webdriver = require("selenium-webdriver"),
      By = webdriver.By,
      utils = webdriver.utils;

var driver;

describe("E to E Test", () => {

  beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    driver = new webdriver.Builder().forBrowser("chrome").build();
  });

  afterAll(() => {
    driver.quit();
  });

  it("Get Button Text", (end) => {
    driver.get('http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html');
    var btn = driver.findElement(By.css('button:nth-of-type(1)'));
    btn.getText()
    .then((text) => {
      expect(text).toBe("Click me!");
    })
    .then(end, end);
  });

});

