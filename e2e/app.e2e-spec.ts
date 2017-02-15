import { NgObservablesProjPage } from './app.po';

describe('ng-observables-proj App', function() {
  let page: NgObservablesProjPage;

  beforeEach(() => {
    page = new NgObservablesProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
