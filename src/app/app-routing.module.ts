import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthorizedChannelsComponent} from "./components/authorized-channels/authorized-channels.component";
import {ProductsComponent} from "./components/products/products.component";
import {DealersComponent} from "./components/dealers/dealers.component";
import {SchedulesComponent} from "./components/schedules/schedules.component";
import {EditDealerComponent} from "./components/dealers/edit-dealer/edit-dealer.component";
import {DeleteDealerComponent} from "./components/dealers/delete-dealer/delete-dealer.component";
import {EditScheduleComponent} from "./components/schedules/edit-schedule/edit-schedule.component";
import {DeleteScheduleComponent} from "./components/schedules/delete-schedule/delete-schedule.component";
import {EditAuthorizedChannelComponent} from "./components/authorized-channels/edit-authorized-channels/edit-authorized-channels.component";
import {DeleteAuthorizedChannelComponent} from "./components/authorized-channels/delete-authorized-channels/delete-authorized-channels.component";
import {EditProductComponent} from "./components/products/edit-products/edit-products.component";
import {DeleteProductComponent} from "./components/products/delete-products/delete-products.component";
import {UsersComponent} from "./components/users/users.component";
import {EditUserComponent} from "./components/users/edit-users/edit-users.component";
import {DeleteUserComponent} from "./components/users/delete-users/delete-users.component";


let routes: Routes;
routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'authorized_channels', component: AuthorizedChannelsComponent, children: [
      { path: 'edit/:id', component: EditAuthorizedChannelComponent },
      { path: 'delete/:id', component: DeleteAuthorizedChannelComponent },
    ]
  },
  {path: 'products', component: ProductsComponent, children: [
      { path: 'edit/:id', component: EditProductComponent },
      { path: 'delete/:id', component: DeleteProductComponent },
    ]},
  {path: 'users', component: UsersComponent, children: [
      { path: 'edit/:id', component: EditUserComponent },
      { path: 'delete/:id', component: DeleteUserComponent },
    ]},
  {
    path: 'dealers', component: DealersComponent, children: [
      { path: 'edit/:id', component: EditDealerComponent },
      { path: 'delete/:id', component: DeleteDealerComponent },
    ]
  },
  {path: 'schedules', component: SchedulesComponent, children: [
      { path: 'edit/:id', component: EditScheduleComponent },
      { path: 'delete/:id', component: DeleteScheduleComponent },
    ]
  },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
