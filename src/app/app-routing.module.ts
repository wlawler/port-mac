import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { HiringdesiresComponent } from './hiring-desires/hiring-desires.component';


const routes: Routes = [
{
  path: 'home', 
  component: HomeComponent, 
} , 
{
  path:'hiringdesires', 
  component: HiringdesiresComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
