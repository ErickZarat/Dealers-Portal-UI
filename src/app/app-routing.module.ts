import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthorizedChannelsComponent} from "./components/authorized-channels/authorized-channels.component";
import {ProductsComponent} from "./components/products/products.component";
import {UsersComponent} from "./components/users/users.component";
import {DealersComponent} from "./components/dealers/dealers.component";
import {SchedulesComponent} from "./components/schedules/schedules.component";


let routes: Routes;
routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'authorized_channels', component: AuthorizedChannelsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'users', component: UsersComponent},
  {
    path: 'dealers', component: DealersComponent, children: [
      {path: 'edit', component: SchedulesComponent},
    ]
  },
  {path: 'schedules', component: SchedulesComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
