import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashreaderPageRoutingModule } from './flashreader-routing.module';

import { FlashreaderPage } from './flashreader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashreaderPageRoutingModule
  ],
  declarations: [FlashreaderPage]
})
export class FlashreaderPageModule {}
