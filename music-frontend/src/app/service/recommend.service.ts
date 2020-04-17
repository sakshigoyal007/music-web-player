import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Register } from 'register';
import { Recommend } from 'Recommend';
import { Favourite } from 'favourite';


@Injectable({
  providedIn: 'root'
})
export class RecommendService {
  recom: Array<Recommend> = new Array(); 
  recomSubject:BehaviorSubject<Array<Recommend>>;
  constructor(private httpClient:HttpClient) {
    this.recom=[];
    this.recomSubject=new BehaviorSubject(this.recom);
   }
 
  // private logInData=new Subject<Register>();
  // logData$=this.logInData.asObservable();
  userId:String;

  private logInData = new BehaviorSubject<String>("");
  logData = this.logInData.asObservable();
 
  sendLogData(message:String){
    this.logInData.next(message);

  }
  
  sendRecomendData(recom:Array<Recommend>){
    this.recom = recom;
    this.recomSubject.next(this.recom);
  }
  getRecomendData(): BehaviorSubject<Array<Recommend>>{
    return this.recomSubject;
  }
  

 
  getRecommand(userId:String): Observable<any> {
    console.log("email"+userId);
    return this.httpClient.get("http://localhost:9998/musix/recommandation/"+userId);
    }

      // getRecommand(userId:String){
      //   console.log("email"+userId);
      //   return this.httpClient.get("http://localhost:9998/musix/recommandation/"+userId).subscribe(data=>{
      //     this.recom = Object.keys(data).map(key => {
      //       return data[key];
      //   })
      //     this.recomSubject.next(this.recom);
      //   })
      // }
  doRecommendation(recommend:Recommend):Observable<Recommend>{
    console.log("do recommend service");
    return this.httpClient.post<Recommend>('http://localhost:9998/musix/recommandation/add',(recommend),{
    headers: new HttpHeaders().set('Content-Type','application/json')
    });
    }
    deleteRecommend(favId:String,userId:String){
      console.log("do recommend delete service");
  
      return this.httpClient.delete<Favourite>('http://localhost:9998/musix/delete/recommandation/'+favId+"/"+userId);

     }

     getAllRecommand(userId:String): Observable<any> {
      //console.log("email"+userId);
      return this.httpClient.get("http://localhost:9998//musix/allrecommandation/");
      }
}
