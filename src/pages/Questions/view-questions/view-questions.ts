import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AddQuestionPage } from '../add-question/add-question';
import { QuesViewPage } from '../ques-view/ques-view';
import { LoginPage } from '../../login/login';



@IonicPage()
@Component({
  selector: 'page-view-questions',
  templateUrl: 'view-questions.html',
})
export class ViewQuestionsPage {
  quesRef = firebase.database().ref("Questions/");
  questions : Array<any> = [];
  questionsloaded : Array<any> = [];

  constructor(
  public navCtrl: NavController, 
  public alertCtrl : AlertController,
  public toastCtrl : ToastController,
  public modalCtrl : ModalController,
  public navParams: NavParams) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      }else{
        this.navCtrl.setRoot(LoginPage);
    }
    });
    this.getQuestions();
  }

  getQuestions(){
    this.quesRef.once('value',itemSnapshot=>{
      let tempA = [];
      itemSnapshot.forEach(itemSnap=>{
        var temp = itemSnap.val();
        temp.key = itemSnap.key
        tempA.push(temp);
      })
      this.questions = tempA;
      this.questionsloaded = tempA;
    })
  }
  initializeItems(): void {
    this.questions = this.questionsloaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.questions = this.questions.filter((v) => {
      if(v.MainQues && q) {
        if (v.MainQues.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }
  AddQues(){
    this.navCtrl.push(AddQuestionPage);
  }
  delConfirm(question){
    let alert = this.alertCtrl.create({
      title: 'Do you want to delete this question ?',
      message: 'It cannot be recovered again',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteQ(question);
          }
        }
      ]
    });
    alert.present();
}

deleteQ(question){
firebase.database().ref("Questions/").child(question.key).remove().then(()=>{
  this.getQuestions();
  this.presentToast("Question Deleted");
})
}

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'top'
  });
  toast.present();

}
viewConfirm(question){
  let profileModal = this.modalCtrl.create(QuesViewPage,{ques : question});
  profileModal.present();
}
}
