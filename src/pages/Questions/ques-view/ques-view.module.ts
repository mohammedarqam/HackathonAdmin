import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuesViewPage } from './ques-view';

@NgModule({
  declarations: [
    QuesViewPage,
  ],
  imports: [
    IonicPageModule.forChild(QuesViewPage),
  ],
})
export class QuesViewPageModule {}
