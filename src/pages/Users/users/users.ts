import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';
import { UserDetailsPage } from '../user-details/user-details';
import { LoginPage } from '../../login/login';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  usersRef = firebase.database().ref("Users/");
  users : Array<any> = [];
  usersLoaded : Array<any> = [];

  constructor(
  public navCtrl: NavController, 
  public modalCtrl : ModalController,
  public navParams: NavParams) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      }else{
        this.navCtrl.setRoot(LoginPage);
    }
    });
    this.getUsers();
  }
  ionViewDidEnter(){
    this.getUsers();
  }
  getUsers(){
    this.usersRef.once('value',itemSnapshot=>{
      let temp = [];
      itemSnapshot.forEach(itemSnap=>{
        temp.push(itemSnap.val());
        return false;
      });
      this.users = temp;
      this.usersLoaded = temp;
    });
  }

  initializeItems(): void {
    this.users = this.usersLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.users = this.users.filter((v) => {
      if(v.Name && q) {
        if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  gtDetails(user){
    this.navCtrl.push(UserDetailsPage,{user : user} );
  }




}
