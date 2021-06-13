import {ComponentPageTitleService} from './page-title.service';
import {Title} from '@angular/platform-browser';

describe('ComponentPageTitleService', () => {
  const title: Title = new Title({});
  const service: ComponentPageTitleService = new ComponentPageTitleService(title);

  it('should initialize title to empty string', () => {
    expect(service._title).toEqual('');
    expect(service.title).toEqual('');
  });
});
