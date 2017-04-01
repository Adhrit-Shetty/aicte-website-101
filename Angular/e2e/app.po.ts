import {browser, element, by} from 'protractor';

export class AICTEPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aicte-root h1')).getText();
  }
}
