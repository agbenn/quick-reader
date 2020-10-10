import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import {LoadingController} from '@ionic/angular';



@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class searchPage {

  topic: string;

  constructor(private dataService: DataService, private router: Router, private loadingController: LoadingController) {}
   

  async submitSearch(searchType) {
    const loading = await this.loadingController.create({
      message: 'loading ' + searchType + ' news'
    });
    loading.present();
    await this.dataService.searchNews(searchType)
    loading.dismiss();
    this.router.navigate(['/newsReader']);
  }
}
