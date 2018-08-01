import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-ques-view',
  templateUrl: 'ques-view.html',
})
export class QuesViewPage {

  ques = this.navParams.get("ques");

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams) {
  }


  


done(){
  this.navCtrl.pop();
}
}
