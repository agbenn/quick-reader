import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashreaderPage } from './flashreader.page';

const routes: Routes = [
  {
    path: '',
    component: FlashreaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlashreaderPageRoutingModule {}
