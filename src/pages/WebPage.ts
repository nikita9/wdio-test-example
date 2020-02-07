import BasePage from 'src/pages/BasePage';

class Test extends BasePage {
  get maximizeWindow() {
    return browser.maximizeWindow();
  }
  get openPage() {
    return browser.url('https://three9nine.com');
  }
  get clickOnExtension() {
    const elem  = $('#visualsp-handle');
    elem.waitForClickable({ timeout: 3000 });

    return elem.click();
  }
  get switchToFrame() {
    return browser.switchToFrame('#visualsp-iframe');
  }
  get result() {
    return $('#elementor-tab-title-2261 > a').getText();
  }
}

export default new Test();
