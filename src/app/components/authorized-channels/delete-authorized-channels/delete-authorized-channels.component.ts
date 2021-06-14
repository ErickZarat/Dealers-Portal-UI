import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthorizedChannel} from "../../../core/interfaces/AuthorizedChannel";
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthorizedChannelService} from "../../../core/services/authorized-channel/authorized-channel.service";

@Component({
  selector: 'app-delete-authorized-channel',
  templateUrl: './delete-authorized-channels.component.html',
  styleUrls: ['./delete-authorized-channels.component.css']
})
export class DeleteAuthorizedChannelComponent implements OnInit {

  authorizedChannel: AuthorizedChannel = {name: ""}
  @Output() refreshHook: EventEmitter<any> = new EventEmitter();

  constructor(private route: ActivatedRoute, public authorizedChannelService: AuthorizedChannelService, private _snackBar: MatSnackBar) { }

  setCurrentAuthorizedChannel (code: String) {
    this.authorizedChannelService.findOne(Number(code)).subscribe(authorizedChannel => {
      this.authorizedChannel = authorizedChannel;
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.setCurrentAuthorizedChannel(params['code'])
    });
  }

  onSubmit() {
    if (this.authorizedChannel.code)
      this.authorizedChannelService.delete(this.authorizedChannel.code).subscribe(authorizedChannel => {
        let message = authorizedChannel ? "Deleted successful" : "Error deleting authorizedChannel"
        this._snackBar.open(message);
        this.refreshHook.emit(true);
      })
  }
}
