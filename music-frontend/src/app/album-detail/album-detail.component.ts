import { Component, OnInit } from '@angular/core';
import { MusicService } from '../service/music.service';
@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  musics: any;
  artists:any;
url:any;
  constructor(private musicService:MusicService) { }
  ngOnInit(): void {
    this.url="../assets/img/1.jpg"
    // if(this.artists.images.length == 0){
    //   console.log("helooo");
    //   this.url="../../assets/img/nullimg1.jpeg";
    // } else{
    //   this.url=this.artists.images[1]['url'];
    // }
    this.musicService.musicId.subscribe(id=>{
      console.log('in albumdetails');
      // console.log(id);
      this.musicService.getBearerToken().subscribe(token=>{
        console.log("in all details token")
        this.musicService.getAlbumDetails(id,token.access_token).subscribe(data=>{
          this.musics=data;
          console.log("in all details dataaaaa")
          this.artists=this.musics;
          // .items[0]["artists"][0]
          console.log(this.artists);
        })
      })
    })
  }
}