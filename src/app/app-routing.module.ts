import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DealersComponent} from "./dealers/dealers.component";

const routes: Routes = [
  {
    path: 'dealers',
    component: DealersComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
