import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AddQuestionPage } from '../pages/Questions/add-question/add-question';
import { ViewQuestionsPage } from '../pages/Questions/view-questions/view-questions';
import { UsersPage } from '../pages/Users/users/users';
import { UserDetailsPage } from '../pages/Users/user-details/user-details';
import { QuesViewPage } from '../pages/Questions/ques-view/ques-view';
import { LoginMPage } from '../pages/login-m/login-m';



firebase.initializeApp({
  apiKey: "AIzaSyC-MuPFFSmsEX8WiR5PiNLea1UUuFEtyY4",
  authDomain: "hacathon-969fe.firebaseapp.com",
  databaseURL: "https://hacathon-969fe.firebaseio.com",
  projectId: "hacathon-969fe",
  storageBucket: "hacathon-969fe.appspot.com",
  messagingSenderId: "870783797722"
});




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AddQuestionPage,
    ViewQuestionsPage,
    UsersPage,
    UserDetailsPage,
    QuesViewPage,
    LoginMPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AddQuestionPage,
    ViewQuestionsPage,
    UsersPage,
    UserDetailsPage,
    QuesViewPage,
    LoginMPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
