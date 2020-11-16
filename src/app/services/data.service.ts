import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private httpClient: HttpClient, private storage: Storage, private firestore: AngularFirestore) {}

  private newsData: object;
  private currentTimeDelay;
  private currentNewsArticle;

  public searchNews(searchType) {

    return new Promise((resolve, reject) => { 
      this.firestore.collection(searchType, ref => ref.orderBy('date','desc').limit(15)).get().toPromise().then((querySnapshot) => {
        let arr = [];
        querySnapshot.forEach(function(doc) {
          var obj = JSON.parse(JSON.stringify(doc.data()));
          obj.id = doc.id;
          //obj.eventId = doc.id;
          arr.push(obj);
        });
  
        if (arr.length > 0) {
          this.storage.set('data', arr);
          this.newsData = arr;
          resolve(200);
        } else {
          console.log("No such document!");
          resolve(null);
        }
      })
      .catch((error: any) => {
        reject(error);
      });
    });
  }

  async getNews(){
    if (!this.newsData){
      await this.storage.get('data').then((res) => {
        this.newsData = res;
      });
      return this.newsData;
    } else {
      return this.newsData;
    }
    
  }

  setNewsArticle(newsArticle){
    this.storage.set('currentNewsArticle', newsArticle);
    this.currentNewsArticle = newsArticle;
  }
  
  async getNewsArticle(){
    if (!this.currentNewsArticle){
      await this.storage.get('currentNewsArticle').then((res) => {
        if(!res){
          this.setCurrentTimeDelay(150)
        } else {
          this.currentNewsArticle = res;
        }
      });
    }
    return this.currentNewsArticle;
  }


  setCurrentTimeDelay(timeDelay){
    this.storage.set('timeDelay', timeDelay);
    this.currentTimeDelay = timeDelay;
  }

  async getCurrentTimeDelay(){
    if (!this.currentTimeDelay){
      await this.storage.get('timeDelay').then((res) => {
        if(!res){
          this.setCurrentTimeDelay(150)
        } else {
          this.currentTimeDelay = res;
        }
      });
    }
    return this.currentTimeDelay;
  }


}
