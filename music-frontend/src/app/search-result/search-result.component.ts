import { Component, OnInit } from '@angular/core';
import { MusicService } from '../service/music.service';
import { RoutingService } from '../service/routing.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchString:string;
  searchResult: Array<any> = new Array(); 
  public text:string='Recommend';
  token:String;
  musics:any;
  type:string;
  artist:String = "artist";
  constructor(private musicService: MusicService,private routingService:RoutingService ) { }

  ngOnInit(): void {
    this.searchResult=[];
    

    this.musicService.searchType.subscribe(data=>{
      this.type = data;
      console.log(this.type);
      this.musicService.currentMessage.subscribe(message => {
        this.searchString=message;
        this.musicService.getBearerToken().subscribe(data=>{
        this.token=data["access_token"]
        //  console.log(this.token);
        this.searchResult=[];
          this.musicService.getSearchMusic(this.searchString,this.type,this.token).subscribe(
            data=>{
              this.musics=data;
              // console.log(this.musics);
              this.searchResult=[];  
              if(this.type==this.artist){
              this.musics["artists"]["items"].forEach(elements => {
              this.searchResult.push(elements);
              // console.log(elements);
              // console.log("in artists search");
              });
            }
            else{
              this.musics["albums"]["items"].forEach(elements => {
                this.searchResult.push(elements);
                console.log(elements);
                console.log("in albums search");
                });
            }

              
              // if(this.searchString == "album"){
              //   this.musics.albums.items.forEach(elements => {
              //     this.searchResult.push(elements);
              //     console.log(elements);
              //   });
              // }


            },
            (error)=>{
              console.log(error);
            }
            );
          })
        }
      );
    })
  }

  
  public changeText(){
    if(this.text==='Recommend'){
      this.text='Unrecommend'
    }
    else{
      this.text='Recommend'

    }

  }
  
}
