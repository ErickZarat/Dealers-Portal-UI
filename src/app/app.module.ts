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
import {UserMockService} from "./core/mocks/user.mock.service";
import {ComponentHeaderModule} from "./shared/components/page-header/page-header.component";
import {UserService} from "./core/services/user/user.service";
import {AuthorizedChannelService} from "./core/services/authorized-channel/authorized-channel.service";
import {ProductService} from "./core/services/product/product.service";
import {ScheduleService} from "./core/services/schedule/schedule.service";
import {DealerService} from "./core/services/dealer/dealer.service";
import {AuthorizedChannelMockService} from "./core/mocks/authorized-channel.mock.service";
import {ProductMockService} from "./core/mocks/product.mock.service";
import {ScheduleMockService} from "./core/mocks/schedule.mock.service";
import {DealerMockService} from "./core/mocks/dealer.mock.service";
import { EditDealerComponent } from './components/dealers/edit-dealer/edit-dealer.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import { DeleteDealerComponent } from './components/dealers/delete-dealer/delete-dealer.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {EditScheduleComponent} from "./components/schedules/edit-schedule/edit-schedule.component";
import {DeleteScheduleComponent} from "./components/schedules/delete-schedule/delete-schedule.component";


@NgModule({
  declarations: [
    AppComponent,
    DealersComponent,
    DashboardComponent,
    ProductsComponent,
    UsersComponent,
    AuthorizedChannelsComponent,
    SchedulesComponent,
    EditDealerComponent,
    DeleteDealerComponent,
    EditScheduleComponent,
    DeleteScheduleComponent
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
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClient,
    HttpClientModule,
    { provide: 'apiEndpoint', useValue: environment.apiEndpoint },
    { provide: UserService, useClass: forwardRef(() => { return environment.apiEndpoint ? UserService : UserMockService; }) },
    { provide: AuthorizedChannelService, useClass: forwardRef(() => { return environment.apiEndpoint ? AuthorizedChannelService: AuthorizedChannelMockService; }) },
    { provide: ProductService, useClass: forwardRef(() => { return environment.apiEndpoint ? ProductService : ProductMockService; }) },
    { provide: ScheduleService, useClass: forwardRef(() => { return environment.apiEndpoint ? ScheduleService : ScheduleMockService; }) },
    { provide: DealerService, useClass: forwardRef(() => { return environment.apiEndpoint ? DealerService : DealerMockService; }) },
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
