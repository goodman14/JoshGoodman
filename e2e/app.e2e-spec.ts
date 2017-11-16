import { JoshGoodmanPage } from './app.po';

describe('josh-goodman App', () => {
  let page: JoshGoodmanPage;

  beforeEach(() => {
    page = new JoshGoodmanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
