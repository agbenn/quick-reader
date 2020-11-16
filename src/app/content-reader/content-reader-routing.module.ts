import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentReaderPage } from './content-reader.page';

const routes: Routes = [
  {
    path: '',
    component: ContentReaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentReaderPageRoutingModule {}
