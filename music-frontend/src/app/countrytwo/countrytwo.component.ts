import { Component, OnInit } from '@angular/core';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-countrytwo',
  templateUrl: './countrytwo.component.html',
  styleUrls: ['./countrytwo.component.css']
})
export class CountrytwoComponent implements OnInit {
  musics:any;
token:String;
public text:string='Recommend';

config={itemsPerPage: 4, currentPage: 1};
  constructor(private musicService:MusicService) { 
  }

  ngOnInit(){


    this.musicService.getBearerToken().subscribe(data=>{
       this.musicService.getMusicAust(data["access_token"]).subscribe(data=>{
        this.musics=data;
        console.log(this.musics);
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
  
}
