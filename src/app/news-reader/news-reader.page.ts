import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-reader',
  templateUrl: './news-reader.page.html',
  styleUrls: ['./news-reader.page.scss'],
})
export class NewsReaderPage implements OnInit {

  news: object;
  timeOut;

  constructor(private router: Router, private dataService: DataService) { }

  async ngOnInit() {
    this.news = await this.dataService.getNews();
    this.timeOut = setInterval(() => { this.routeHome(); }, (1000 * 60 * 20));

  }

  async ionViewDidEnter() {
    this.news = await this.dataService.getNews()
  }

  routeToReaderSelection(index) {
    clearInterval(this.timeOut)
    this.dataService.setNewsArticle(this.news[index])
    this.router.navigate(['/reader-selector'])
  }
  
  private routeHome() {
    clearInterval(this.timeOut)
    this.router.navigate(['/search'])
  }

}
