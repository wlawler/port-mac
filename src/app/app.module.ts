import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponentComponent } from './container-component/container-component.component';
//import { NavBarComponent } from './container-component/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { HiringdesiresComponent } from './hiring-desires/hiring-desires.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    AppComponent,
    ContainerComponentComponent,
  //  NavBarComponent,
    HomeComponent,
    HiringdesiresComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
