import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BioComponent} from './container-component/bio/bio.component';
import { HiringdesiresComponent } from './container-component/hiring-desires/hiring-desires.component';


const routes: Routes = [
{
  path: 'bio', 
  component: BioComponent, 
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
