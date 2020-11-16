import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentReaderPageRoutingModule } from './content-reader-routing.module';

import { ContentReaderPage } from './content-reader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentReaderPageRoutingModule
  ],
  declarations: [ContentReaderPage]
})
export class ContentReaderPageModule {}
