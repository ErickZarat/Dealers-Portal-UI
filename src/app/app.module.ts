import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { DealersComponent } from './dealers/dealers.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSidenavModule} from '@angular/material/sidenav';
import {ComponentHeaderModule} from "./page-header/page-header.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { AuthorizedChannelsComponent } from './authorized-channels/authorized-channels.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import { SchedulesComponent } from './schedules/schedules.component';

@NgModule({
  declarations: [
    AppComponent,
    DealersComponent,
    DashboardComponent,
    ProductsComponent,
    UsersComponent,
    AuthorizedChannelsComponent,
    SchedulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonToggleModule,
    ComponentHeaderModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
