import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BioComponent} from './container-component/bio/bio.component';


const routes: Routes = [
{
  path: 'bio', 
  component: BioComponent, 
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
