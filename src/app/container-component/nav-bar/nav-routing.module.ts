import {NgModule} from '@angular/core'; 
import {RouterModule, Routes} from'@angular/router';

const navRoutes: Routes = [ 

]; 

@NgModule({ 
    imports: [ 
      RouterModule.forChild(navRoutes)
    ], 
    exports: [ 
        RouterModule
    ]
})

export class NavRoutingModule { 

}