import { Component, OnInit } from '@angular/core';
import { MusicService } from '../service/music.service';
import { RoutingService } from '../service/routing.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchString:string;
  searchType:string;
  musics:any;
  token:string;
  album:string="album";
  artist:string="artist";
  constructor(private musicService:MusicService, private routingService:RoutingService) { }

  ngOnInit(): void {
    this.musicService.currentMessage.subscribe(message=>{
      this.searchString = message;
      // console.log(this.searchString);
    })

    this.musicService.searchType.subscribe(type=>{
      this.searchType = type;
      // console.log(type);
    })
  }
  
  searchMusic(){
    this.musicService.changeMessage(this.searchString);
    this.musicService.changeType(this.searchType);
    this.routingService.routeToSerchResult();
    // this.searchResult=[];
    // this.musicService.getBearerToken().subscribe(data=>{
    //   this.token=data["access_token"]
    // //  console.log(this.token);
    // this.musicService.getSearchREsult(this.searchString,this.token).subscribe(
    //   data=>{
    //     this.musics=data;
    //     console.log(this.musics);
    //     this.musics.tracks.items.forEach(elements => {
    //       this.searchResult.push(elements);
    //       console.log(elements);
    //     });
    //     this.musicService.sendSearchString(this.searchResult);
    //     this.routingService.routeToSerchResult();
    //   },
    //   (error)=>{
    //     console.log(error);
    //   }
    //   );
    // })

    // console.log(this.searchResult.length);
    
  }

 
}
