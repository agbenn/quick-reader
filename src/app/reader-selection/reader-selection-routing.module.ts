import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReaderSelectionPage } from './reader-selection.page';

const routes: Routes = [
  {
    path: '',
    component: ReaderSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReaderSelectionPageRoutingModule {}
