import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Recommend } from 'Recommend';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Favourite } from 'favourite';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private httpClient:HttpClient) { }
 
  // private logInData=new Subject<Register>();
  // logData$=this.logInData.asObservable();
  userId:String;

  private logInData = new BehaviorSubject<String>("");
  logData = this.logInData.asObservable();
 
  sendLogData(message:String){
    this.logInData.next(message);
  
    

  }
  
  

 
  getFavourite(userId:String): Observable<any> {
    console.log("email"+userId);
    return this.httpClient.get("http://localhost:9997/musix/favourite/"+userId);
    }
  doFavourites(favourite:Favourite):Observable<Recommend>{
    console.log("do recommend service");
    console.log("email"+favourite.userId)
    return this.httpClient.post<Favourite>('http://localhost:9997/musix/favourite/add',(favourite),{
    headers: new HttpHeaders().set('Content-Type','application/json')
    });
    }
    deleteFavourite(favId:String,userId:String){
      console.log("do favourite delete service");
  
    return this.httpClient.delete<Favourite>('http://localhost:9997/musix/favourite/'+favId+"/"+userId);
     }
     

}
