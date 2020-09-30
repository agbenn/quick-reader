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

  public searchNewsTopic(topic){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    var requestURL = "http://127.0.0.1:8081/search?topic=" + topic + "&date=" + yyyy + '-' + mm + '-' + dd;

    console.log(requestURL);

    var options = {'headers':{
      'Content-Type':  'application/x-www-form-urlencoded',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9,es;q=0.8'
    }}

    return new Promise(resolve => {
      this.httpClient.get(requestURL, options).subscribe((data: any[])=>{
        console.log(data);
        this.storage.set('data', data);
        this.newsData = data;
        resolve(200)
      }, error => {
        resolve(error);
      });
    });

  }

  public searchNews(searchType) {
    var requestURL = "http://127.0.0.1:8081/" + searchType

    console.log(requestURL);

    var options = {'headers':{
      'Content-Type':  'application/x-www-form-urlencoded',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9,es;q=0.8'
    }}

    return new Promise(resolve => {
      this.httpClient.get(requestURL, options).subscribe((data: any[])=>{
        console.log(data);
        this.storage.set('data', data);
        this.newsData = data;
        resolve(200)
      }, error => {
        resolve(error);
      });
    });
  }

  async getNews(){
    if (!this.newsData){
      await this.storage.get('data').then((res) => {
        console.log('in the func');
        console.log(res);
        this.newsData = res;
        console.log(this.newsData)
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
        console.log('in the func');
        console.log(res);
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
