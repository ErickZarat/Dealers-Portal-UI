import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Injectable({providedIn: 'root'})
export class ComponentPageTitleService {
  _title = '';
  _originalTitle = 'Portal-UI';

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
    if (title !== '') {
      title = `${title} | Portal-UI`;
    } else {
      title = this._originalTitle;
    }
    this.bodyTitle.setTitle(title);
  }

  constructor(private bodyTitle: Title) {}
}
