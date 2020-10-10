import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient, private storage: Storage) { }

  private newsData: object;
  private currentTimeDelay;

  

  public searchNews(searchType) {

    var serviceUrl = 'https://news-reader-api-wu5pvfaq4a-uc.a.run.app/' //'https://news-reader-api-wu5pvfaq4a-uc.a.run.app/' //'http://127.0.0.1:8081'
    var token = 'jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5IjoicGFzc3BocmFzZSIsImlhdCI6MTYwMjEzNzM5OH0.UeSMyrOZH34sEr2qDP9uo3bCaMRwqQdkQMX95R2Bs4I'

    serviceUrl = serviceUrl + '/news/?newsType=' + searchType

    var serviceRequestOptions = {'headers':{
      'Content-Type':  'application/x-www-form-urlencoded',
      'Accept': '*/*',
      'Authorization': token,
    }}
 
    try {
      // serviceResponse converts the Markdown plaintext to HTML.
      return new Promise(resolve => {
        this.httpClient.get(serviceUrl, serviceRequestOptions).subscribe((data: any[])=>{
          this.storage.set('data', data);
          this.newsData = data;
          resolve(200)
        }, error => {
          resolve(error);
        });
      });
    } catch (err) { 
      throw Error('request to rendering service failed: ' + err);
    };
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

  setCurrentTimeDelay(timeDelay){
    this.storage.set('timeDelay', timeDelay);
    this.currentTimeDelay = timeDelay;
  }

  async getCurrentTimeDelay(){
    if (!this.currentTimeDelay){
      await this.storage.get('timeDelay').then((res) => {
        if(!res){
          this.setCurrentTimeDelay(500)
        } else {
          this.currentTimeDelay = res;
        }
      });
    }
    return this.currentTimeDelay;
  }


}
