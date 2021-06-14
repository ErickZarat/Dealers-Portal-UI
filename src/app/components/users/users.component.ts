import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {ComponentPageTitleService} from "../../core/services/page-title/page-title.service";
import {User} from "../../core/interfaces/User";
import {UserService} from "../../core/services/user/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  @ViewChild('formDrawer') formDrawer: MatDrawer | undefined;
  public users: User[]

  constructor(public _componentPageTitle: ComponentPageTitleService, public userService: UserService) {
    _componentPageTitle.title = "Users";
    this.users = []
  }

  openDrawer() {
    if (this.formDrawer !== undefined) this.formDrawer.open();
  }

  closeDrawer() {
    if (this.formDrawer !== undefined) this.formDrawer.close();
  }

  refreshUsers(){
    this.userService.find().subscribe(users => {
      this.users = users;
    });
  }

  ngOnInit(): void {
    this.refreshUsers()
  }

  // @ts-ignore
  onActivate(componentReference) {
    if (componentReference.hasOwnProperty("refreshHook"))
      componentReference.refreshHook.subscribe((refresh: Boolean) => {
        if (refresh){
          this.refreshUsers()
          this.closeDrawer()
        }
      })
  }
}
