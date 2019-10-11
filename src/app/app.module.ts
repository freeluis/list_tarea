import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddTaskModalPage } from './add-task-modal/add-task-modal.page';
import { MiservicioService } from './shared/miservicio.service';
import { ListService } from './shared/list.service';
//import { ListService } from './shared/list.service';
//import { DoneTodoPipePipe } from './pipe/done-todo-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
  
  ],

  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    IonicStorageModule.forRoot(),
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,},
    MiservicioService,
    ListService,
    //ListService
  ],
  bootstrap: [AppComponent],  
})
export class AppModule {}
