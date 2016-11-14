import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage, LoginPage } from '../pages';

import { AngularFireModule, FIREBASE_PROVIDERS } from 'angularfire2';

import { config, myFirebaseAuthConfig } from './app.configuration';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    AngularFireModule.initializeApp(config, myFirebaseAuthConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    FIREBASE_PROVIDERS,
  ]
})
export class AppModule { }
