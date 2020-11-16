import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetentionQuizPageRoutingModule } from './retention-quiz-routing.module';

import { RetentionQuizPage } from './retention-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetentionQuizPageRoutingModule
  ],
  declarations: [RetentionQuizPage]
})
export class RetentionQuizPageModule {}
