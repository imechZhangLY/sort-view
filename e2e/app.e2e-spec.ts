import { SortViewPage } from './app.po';

describe('sort-view App', function() {
  let page: SortViewPage;

  beforeEach(() => {
    page = new SortViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
