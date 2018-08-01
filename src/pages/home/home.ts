import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, AlertController, MenuController, IonicPage } from 'ionic-angular';
import * as firebase from 'firebase';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usersRef = firebase.database().ref("Users/");
  totUsers: number = 0;
  quesRef = firebase.database().ref("Questions/");
  totQues: number = 0;

  constructor(
  public navCtrl: NavController,
  private menuCtrl : MenuController) {
    this.menuCtrl.enable(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      }else{
        this.navCtrl.setRoot(LoginPage);
    }
    });
  }

  ionViewDidEnter(){
    this.getUsers();
    this.getQue();
  }

  getUsers(){
    this.usersRef.once('value',itemSnapshot=>{
      this.totUsers = itemSnapshot.numChildren();
    });
  }
  getQue(){
    this.quesRef.once('value',itemSnapshot=>{
      this.totQues = itemSnapshot.numChildren();
    });
  }

}
