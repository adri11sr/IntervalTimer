import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

//  firebase imports, remove what you don't require
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { firebaseConfig } from './config/config';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutinasWiletics } from './localData/rutinas.index';
import { LocalDataModule } from './localData/localData.module';
import { rutinaIntermedia } from './localData/RutinasWiletics/rutina-intermedia';
import { rutinaBasica } from './localData/RutinasWiletics/rutina-basica';
import { rutinaAvanzada } from './localData/RutinasWiletics/rutina-avazada';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFirestore,
    rutinaIntermedia,
    rutinaBasica,
    rutinaAvanzada
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
