import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
// import { Music } from './music';
@Injectable()
export class MusicService {
  // private REST_API_SERVER="http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=8fa21727b110c414034bc802e42d2562&format=json";
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  private id=new BehaviorSubject<String>('');
  musicId=this.id.asObservable();
  private type = new BehaviorSubject('');
  searchType = this.type.asObservable();
 // .set("aut","basic +btao(userid:password)")
private REST_API_SERVER="http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=india&api_key=8fa21727b110c414034bc802e42d2562&format=json";
constructor(private httpClient:HttpClient) { }
  getBearerToken(): Observable<any>{
    return this.httpClient.post("https://b40885a19a2b4e9dbb761092c6936619:5f26f3863529499facac3338adb17f01@accounts.spotify.com/api/token", ("grant_type=client_credentials"),{
      headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set("Authorization", "Basic YjQwODg1YTE5YTJiNGU5ZGJiNzYxMDkyYzY5MzY2MTk6NWYyNmYzODYzNTI5NDk5ZmFjYWMzMzM4YWRiMTdmMDE=")
    });
  }
  getMusics(token: String): Observable<any> {
    return this.httpClient.get("https://api.spotify.com/v1/browse/new-releases?country=IN&limit=12", {
      headers:new HttpHeaders().set('Content-Type', 'application/json').set('Authorization',`Bearer ${token}`)
    });
  }
  getMusicAust(token:String):Observable<any>{
    return this.httpClient.get("https://api.spotify.com/v1/browse/new-releases?country=AU&limit=12", {
      headers:new HttpHeaders().set('Content-Type', 'application/json').set('Authorization',`Bearer ${token}`)
    });
  }
  getTopTracks(): Observable<any>{
    return this.httpClient.get("http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=8fa21727b110c414034bc802e42d2562&format=json");
  }
  getTopTrackss(token: String): Observable<any>{
    return this.httpClient.get("https://api.spotify.com/v1/search?q=atif&type=track&market=in&limit=20", {
      headers:new HttpHeaders().set('Content-Type', 'application/json').set('Authorization',`Bearer ${token}`)
    });
  }
  getSearchMusic(searchString:String,type:String,token: String): Observable<any>{
    // const url: "https://api.spotify.com/v1/search?q="+searchString+"&type=track&market=in&limit=5"
    return this.httpClient.get("https://api.spotify.com/v1/search?q="+searchString+"&type="+type+"&market=in&limit=4", {
      headers:new HttpHeaders().set('Content-Type', 'application/json').set('Authorization',`Bearer ${token}`)
    });
  }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  changeType(type: string){
    this.type.next(type);
  }
  getAlbumDetails(id:String,token: String):Observable<any>{
    console.log("api callingg");
    // console.log(id)
    // console.log(token)
    return this.httpClient.get("https://api.spotify.com/v1/albums/"+id+"/tracks?limit=2", {
      headers:new HttpHeaders().set('Content-Type', 'application/json').set('Authorization',`Bearer ${token}`)
    });
}
changeMusicId(id:String){
  this.id.next(id);
}
}





