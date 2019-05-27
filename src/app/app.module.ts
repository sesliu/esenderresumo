import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { UIRouterModule, RootModule } from '@uirouter/angular';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';




const rootModule : RootModule = {

  states : [
        {
          name:"dash",
          url: "/dash",
          component: DashComponent
        }
  ],

  useHash: false,
  otherwise:{state : "dash"} 

}

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot(rootModule),
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
