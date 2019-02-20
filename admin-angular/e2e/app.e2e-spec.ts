import { AdminAngularPage } from './app.po';

describe('admin-angular App', function() {
  let page: AdminAngularPage;

  beforeEach(() => {
    page = new AdminAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
