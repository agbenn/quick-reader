import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsReaderPageRoutingModule } from './news-reader-routing.module';

import { NewsReaderPage } from './news-reader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsReaderPageRoutingModule
  ],
  declarations: [NewsReaderPage]
})
export class NewsReaderPageModule {}
