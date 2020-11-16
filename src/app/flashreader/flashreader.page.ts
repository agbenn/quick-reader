import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-flashreader',
  templateUrl: './flashreader.page.html',
  styleUrls: ['./flashreader.page.scss'],
})
export class FlashreaderPage implements OnInit {

  text;
  currentWord: string;
  currentStep = 1;
  currentTimeDelay;
  currentIndex = 0;
  isFinished = false;
  wpm;
  isStopped = true;
  interval;
  isReader = true;
  borderColor = '#FFFFFF';
  stopOrStart = 'Start';

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.currentTimeDelay = await this.dataService.getCurrentTimeDelay();
    this.wpm = Math.round(60000/(this.currentTimeDelay))
    var newsData = await this.dataService.getNewsArticle()
    this.text = newsData.tokenized
  }

  ionicViewDidLeave(){
    if (this.interval) {
      clearInterval(this.interval);
    }  
  }

  stopStartReader(){
    if (this.stopOrStart == 'Start') {
      this.startReader()
      this.stopOrStart = 'Stop'
    } else {
      this.stopReader()
      this.stopOrStart = 'Start'
    }
  }

  startReader(){
    if(!this.interval){
      this.interval = setInterval(() => { this.changeWord(); }, this.currentTimeDelay);
      this.isStopped = false;
    }
  }

  stopReader(){
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
    this.isStopped = true;
  }

  resetReader(){
    this.stopReader();
    this.currentWord = '';
    this.currentIndex = 0;
  }

  updateWPM(timeDelayUpdate){

    this.currentTimeDelay = this.currentTimeDelay + timeDelayUpdate;

    if(this.currentTimeDelay < 10){
      this.currentTimeDelay = 10
    }

    this.dataService.setCurrentTimeDelay(this.currentTimeDelay)

    this.wpm = Math.round(60000/(this.currentTimeDelay))
    
    if (!this.isStopped){
      this.stopReader()
      this.startReader()
    }
  }

  changeWord(){
    this.currentWord = this.text[this.currentIndex]
    this.currentIndex += this.currentStep
    if(this.currentIndex < 0){
      this.currentIndex = 0
    }
    if(this.currentIndex == this.text.length){
      this.currentIndex = this.text.length-1
    }
  }

}
