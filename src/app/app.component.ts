import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { ViewQuestionsPage } from '../pages/Questions/view-questions/view-questions';
import { UsersPage } from '../pages/Users/users/users';
import { LoginMPage } from '../pages/login-m/login-m';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  activePage: any;


  pages: Array<{ title: string, component: any, icon: any }>;

  constructor(public platform: Platform,) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage, icon: "home" },
      { title: 'Users', component: UsersPage, icon: "ios-people" },
      { title: 'Questions', component: ViewQuestionsPage, icon: "md-help" },


    ];
    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(this.platform.is("core")){
        this.rootPage=LoginPage;
      }else{
        this.rootPage= LoginMPage;
      }
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;

  }
  checkActive(page) {
    return page == this.activePage;
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      this.nav.setRoot(LoginPage);
    }).catch((error) => {
      console.log(error.message);
    });
 
}

}
