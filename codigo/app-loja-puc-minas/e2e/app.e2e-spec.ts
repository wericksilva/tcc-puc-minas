import { LojaPuc } from './app.po';

describe('LojaPuc App', function() {
  let page: LojaPuc;

  beforeEach(() => {
    page = new LojaPuc();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});
