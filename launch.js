var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html');

var btn = driver.findElement(By.css('button:nth-of-type(2)'));

btn.getText().then(function(text) {
  console.log('Button text is \'' + text + '\'');
});

btn.click();

var alert = driver.switchTo().alert();
alert.getText().then(function(text){
  console.log('Button text is \'' + text + '\'');
});

alert.accept();

var input = driver.findElement(By.id('name'));

driver.sleep(1000).then(function(){
  input.sendKeys("mikan");
  driver.sleep(500).then(function(){
    input.getAttribute("value").then((value) => {
      if(value === ""){
        console.log("value is blank ... ");
      }else{
        console.log(value);
      }
    });
  });
});

driver.sleep(2000).then(function() {
  driver.getTitle().then(function(title) {
    if(title === 'Native keyboard accessibility') {
      console.log('Test passed');
    } else {
      console.log('Test failed ... ');
    }
  });
});

driver.quit();