import { Component, OnInit } from '@angular/core';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.css']
})
export class TopTracksComponent implements OnInit {

  musics:any;
  token:String;
  public text:string='Recommend';
  config={itemsPerPage:4,currentPage:1};

  constructor(private musicService:MusicService ) {
   }

  ngOnInit(){
    // this.musicService.getBearerToken().subscribe(data=>{
    //   this.token=data["access_token"]
      // console.log(this.token);


    // })

    this.musicService.getBearerToken().subscribe(data=>{
      this.musicService.getTopTrackss(data["access_token"]).subscribe(data=>{
       this.musics=data;
       console.log(this.musics+"top tracks");
      })
   });
   



  }
  public changeText(){
    if(this.text==='Recommend'){
      this.text='Unrecommend'
    }
    else{
      this.text='Recommend'

    }

  }

  // clickme(){
  //   // console.log(this.musics.tracks.items[0].album.images[0].url);
  //   // this.musics.tracks.items.forEach(element => {
  //   //  console.log(element.album.images[0].url);
  //   // });

  //   this.musicService.getTopTrackss(this.token).subscribe(
  //     data=>{
       
  //       this.musics=data;
  //       console.log(this.musics);
  //     },
  //     (error)=>{
  //       console.log(error);
  //     }
  //     )
  // }

}
