import {expect} from 'chai';
import WebPage from "src/pages/WebPage";

describe('Check the Web page', () => {
    it('Open the Web page', () => {
        WebPage.maximizeWindow;
        WebPage.openPage;

        expect(WebPage.result).to.eq('LEADSMARKET');
    });
});
