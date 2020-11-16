import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reader-selection',
  templateUrl: './reader-selection.page.html',
  styleUrls: ['./reader-selection.page.scss'],
})
export class ReaderSelectionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  async presentReader(searchType) {
    switch(searchType) {
      case 'flash':
        this.router.navigate(['/flash-reader'])
        break;
      case 'speed':
        this.router.navigate(['/content-reader'])
        break;
      case 'content':
        this.router.navigate(['/speed-reader'])
        break;
      case 'quiz':
        this.router.navigate(['/retention-quiz'])
        break;
    }
    
  }
}
