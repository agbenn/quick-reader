import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsReaderPage } from './news-reader.page';

const routes: Routes = [
  {
    path: '',
    component: NewsReaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsReaderPageRoutingModule {}
