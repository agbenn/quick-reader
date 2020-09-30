import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { searchPage } from './search.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { searchPageRoutingModule } from './search-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    searchPageRoutingModule
  ],
  declarations: [searchPage]
})
export class searchPageModule {}
