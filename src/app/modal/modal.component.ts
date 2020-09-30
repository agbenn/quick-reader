import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  text;
  currentWord: string;
  currentStep = 1;
  currentTimeDelay;
  currentIndex = 0;
  isFinished = false;
  wpm;
  isStopped = true;
  interval;

  constructor(public modalController: ModalController, private dataService: DataService,) { }

  async ngOnInit() {
    this.currentTimeDelay = await this.dataService.getCurrentTimeDelay();
    this.wpm = Math.round(60000/(this.currentTimeDelay))
  }

  ionicViewDidLeave(){
    if (this.interval) {
      clearInterval(this.interval);
    }  
  }
  closeModal(){
    if (this.interval) {
      clearInterval(this.interval);
    }  
    this.modalController.dismiss()
  }

  startReader(){
    this.interval = setInterval(() => { this.changeWord(); }, this.currentTimeDelay);
    this.isStopped = false;
  }

  stopReader(){
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.isStopped = true;
  }

  resetReader(){
    this.stopReader();
    this.currentWord = '';
    this.currentIndex = 0;
  }

  updateWPM(timeDelayUpdate){

    console.log(timeDelayUpdate)

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
    console.log(this.currentWord)
  }

}
