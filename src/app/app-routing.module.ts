import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DealersComponent} from "./dealers/dealers.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthorizedChannelsComponent} from "./authorized-channels/authorized-channels.component";
import {ProductsComponent} from "./products/products.component";
import {UsersComponent} from "./users/users.component";
import {SchedulesComponent} from "./schedules/schedules.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'authorized_channels', component: AuthorizedChannelsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'dealers', component: DealersComponent },
  { path: 'schedules', component: SchedulesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
