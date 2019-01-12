import { browser, element, by } from 'protractor';

export class LojaPuc {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mt-root h1')).getText();
  }
}
