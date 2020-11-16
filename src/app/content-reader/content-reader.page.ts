import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-content-reader',
  templateUrl: './content-reader.page.html',
  styleUrls: ['./content-reader.page.scss'],
})
export class ContentReaderPage implements OnInit {

  constructor(private dataService: DataService,) { }

  ngOnInit() {
    
  }

}
