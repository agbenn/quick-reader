import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news-reader',
  templateUrl: './news-reader.page.html',
  styleUrls: ['./news-reader.page.scss'],
})
export class NewsReaderPage implements OnInit {

  news: object;
  timeOut;

  constructor(private router: Router, private dataService: DataService, public modalController: ModalController) { }

  async ngOnInit() {
    this.news = await this.dataService.getNews();
    this.timeOut = setInterval(() => { this.routeHome(); }, (1000 * 60 * 20));

  }

  async ionViewDidEnter() {
    this.news = await this.dataService.getNews()
  }

  async presentModal(index) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'news-reader-modal',
      componentProps: { 
        text: this.news[index].tokenized,
      }
    });

    return await modal.present();
  }
  private routeHome() {
    clearInterval(this.timeOut)
    this.router.navigate(['/search'])
  }

}
