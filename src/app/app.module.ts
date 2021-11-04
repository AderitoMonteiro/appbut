import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

export const firebaseConfig = {
  apiKey: 'AIzaSyDCz8MLV9ltSfnLHT3__7faCFx9NzR7Ouo',
  authDomain: 'ionicapp-63140.firebaseapp.com',
  projectId: 'ionicapp-63140',
  storageBucket: 'ionicapp-63140.appspot.com',
  messagingSenderId: '515074306028',
  appId: '1:515074306028:web:c9a611dcee09d659615ac9'
};

@NgModule({
  entryComponents: [],
  declarations: [AppComponent,

    ],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,

   ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],

  exports: [
    FormBuilder,
    Validators,
    FormControl
    ]


})
export class AppModule {}
