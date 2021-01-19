import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
//import { AppRoutingModule } from './app-routing.module.tx';
import { AppComponent } from './app.component';
import { ContainerComponentComponent } from './container-component/container-component.component';
//import { NavBarComponent } from './container-component/nav-bar/nav-bar.component';
import { BioComponent } from './container-component/bio/bio.component';
import { HiringdesiresComponent } from './container-component/hiring-desires/hiring-desires.component';

const routes: Routes = [
  {
    
  }
]



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponentComponent,
   // NavBarComponent,
    BioComponent,
    HiringdesiresComponent,
    
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
