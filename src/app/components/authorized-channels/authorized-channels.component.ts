import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {ComponentPageTitleService} from "../../core/services/page-title/page-title.service";
import {AuthorizedChannel} from "../../core/interfaces/AuthorizedChannel";
import {AuthorizedChannelService} from "../../core/services/authorized-channel/authorized-channel.service";

@Component({
  selector: 'app-authorized-channels',
  templateUrl: './authorized-channels.component.html',
  styleUrls: ['./authorized-channels.component.css']
})
export class AuthorizedChannelsComponent implements OnInit{

  @ViewChild('formDrawer') formDrawer: MatDrawer | undefined;
  public authorizedChannels: AuthorizedChannel[]

  constructor(public _componentPageTitle: ComponentPageTitleService, public authorizedChannelService: AuthorizedChannelService) {
    _componentPageTitle.title = "AuthorizedChannels";
    this.authorizedChannels = []
  }

  openDrawer() {
    if (this.formDrawer !== undefined) this.formDrawer.open();
  }

  closeDrawer() {
    if (this.formDrawer !== undefined) this.formDrawer.close();
  }

  refreshAuthorizedChannels(){
    this.authorizedChannelService.find().subscribe(authorizedChannels => {
      this.authorizedChannels = authorizedChannels;
    });
  }

  ngOnInit(): void {
    this.refreshAuthorizedChannels()
  }

  // @ts-ignore
  onActivate(componentReference) {
    if (componentReference.hasOwnProperty("refreshHook"))
      componentReference.refreshHook.subscribe((refresh: Boolean) => {
        if (refresh){
          this.refreshAuthorizedChannels()
          this.closeDrawer()
        }
      })
  }
}
