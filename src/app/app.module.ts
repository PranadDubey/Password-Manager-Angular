import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsComponent } from './layouts/layouts.component';
import { HeadnavComponent } from './partials/headnav/headnav.component';
import { FooterComponent } from './partials/footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SiteListComponent } from './site-list/site-list.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import {
  provideFirestore,
  getFirestore,
  Firestore,
} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.development';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCsfmEQUAOeXeIvtiPjuQ0jcLeg8dcWw24',
//   authDomain: 'password-manager-8dda6.firebaseapp.com',
//   databaseURL:
//     'https://password-manager-8dda6-default-rtdb.asia-southeast1.firebasedatabase.app',
//   projectId: 'password-manager-8dda6',
//   storageBucket: 'password-manager-8dda6.appspot.com',
//   messagingSenderId: '674622729255',
//   appId: '1:674622729255:web:c70d0bed7e48a4f6b4b202',
//   measurementId: 'G-RLY19F6NRL',
// };

// const app = initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    HeadnavComponent,
    FooterComponent,
    LandingPageComponent,
    LoginPageComponent,
    SiteListComponent,
  ],
  imports: [
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRippleModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
