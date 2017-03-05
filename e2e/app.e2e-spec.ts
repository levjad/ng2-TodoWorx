import { Ng2ToDoBspPage } from './app.po';

describe('ng2-to-do-bsp App', function() {
  let page: Ng2ToDoBspPage;

  beforeEach(() => {
    page = new Ng2ToDoBspPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
