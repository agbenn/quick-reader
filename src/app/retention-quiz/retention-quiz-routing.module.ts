import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetentionQuizPage } from './retention-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: RetentionQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetentionQuizPageRoutingModule {}
