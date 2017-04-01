import {AICTEPage} from './app.po';

describe('aicte App', () => {
  let page: AICTEPage;

  beforeEach(() => {
    page = new AICTEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('aicte works!');
  });
});
