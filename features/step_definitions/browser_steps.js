var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var assert = require('chai').assert;

defineSupportCode(function({setDefaultTimeout}) {
  setDefaultTimeout(15000);
});

defineSupportCode(function({Given, When, Then}) {
	
  Given('Открыта главная страница сайта {string}', function(url) {
    return this.driver.get("https://"+url);
  });

  When('Проверяю ссылки названий направлений специальности, например {string}', function (text) {
    var xpath = "//*[text() = '"+text+"']";
    return this.driver.findElement({xpath: xpath}).click();
  });

  Then('попадаю на страницу {string}', function (text) {
    this.driver.getCurrentUrl().then(function (url) {
      return assert.equal("https://docdoc.ru"+text,url);
      });
  });  
});