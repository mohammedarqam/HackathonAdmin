import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-add-question',
  templateUrl: 'add-question.html',
})
export class AddQuestionPage {

  mainquestion : string;
  question : string;
  option1 : string;
  option2 : string;
  option3 : string;
  option4 : string;
  answer : string;

  quesRef = firebase.database().ref("Questions/");

  constructor(
  public navCtrl: NavController,
  public toastCtrl : ToastController, 
  public navParams: NavParams) {
  }

  addQues(){
    this.quesRef.push({
      Question : this.question,
      MainQues : this.mainquestion,
      Option1 : this.option1,
      Option2 : this.option2,
      Option3 : this.option3,
      Option4 : this.option4,
      Answer : this.answer
    }).then(()=>{
      this.done();
      this.presentToast("Question Added");
    })
   }
 
 
 
   presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      showCloseButton: false,
    });
    toast.present();
  }

  done(){
    this.navCtrl.pop();
  }

}
