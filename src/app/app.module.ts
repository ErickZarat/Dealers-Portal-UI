import {forwardRef, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {MatTableModule} from "@angular/material/table";
import {DealersComponent} from "./components/dealers/dealers.component";
import {UsersComponent} from "./components/users/users.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProductsComponent} from "./components/products/products.component";
import {AuthorizedChannelsComponent} from "./components/authorized-channels/authorized-channels.component";
import {SchedulesComponent} from "./components/schedules/schedules.component";
import {UserService} from "./core/services/user.service";
import {UserMockService} from "./core/mocks/user.mock.service";
import {ComponentHeaderModule} from "./shared/components/page-header/page-header.component";

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
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonToggleModule,
    ComponentHeaderModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
  ],
  providers: [
    HttpClient,
    { provide: 'apiEndpoint', useValue: environment.apiEndpoint},
    { provide: UserService, useClass: forwardRef(() => { return environment.apiEndpoint ? UserService : UserMockService; }) }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
