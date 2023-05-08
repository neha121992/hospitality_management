import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'new-booking', loadChildren: () => import('./new-booking/new-booking.module').then(m => m.NewBookingModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'all-booking', loadChildren: () => import('./all-booking/all-booking.module').then(m => m.AllBookingModule) },
  { path:'', redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
