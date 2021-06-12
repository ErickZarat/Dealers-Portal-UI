import { Component, OnInit } from '@angular/core';
import {ComponentPageTitleService} from "../page-title/page-title.service";

@Component({
  selector: 'app-authorized-channels',
  templateUrl: './authorized-channels.component.html',
  styleUrls: ['./authorized-channels.component.css']
})
export class AuthorizedChannelsComponent implements OnInit {

  constructor(public _componentPageTitle: ComponentPageTitleService) {
    _componentPageTitle.title = "Authorized Channels";
  }

  ngOnInit(): void {
  }

}
