import { TarefasPage } from './app.po';

describe('tarefas App', () => {
  let page: TarefasPage;

  beforeEach(() => {
    page = new TarefasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
