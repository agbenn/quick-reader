import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReaderSelectionPageRoutingModule } from './reader-selection-routing.module';

import { ReaderSelectionPage } from './reader-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReaderSelectionPageRoutingModule
  ],
  declarations: [ReaderSelectionPage]
})
export class ReaderSelectionPageModule {}
