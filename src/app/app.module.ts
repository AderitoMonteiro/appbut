import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyC_q-B-EJ6F1MJhUHrd--Gu5Dq5xrtlcJ4',
  authDomain: 'appeec-ef7e7.firebaseapp.com',
  projectId: 'appeec-ef7e7',
  storageBucket: 'appeec-ef7e7.appspot.com',
  messagingSenderId: '858490559757',
  appId: '1:858490559757:web:8ad3f86e65efe60faea444',
  measurementId: 'G-HXJEHCC2GZ'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
