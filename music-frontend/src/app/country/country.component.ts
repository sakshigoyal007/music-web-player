import { Component, OnInit } from '@angular/core';
import { MusicService } from '../service/music.service';
// import {delay} from 'rxjs/operators';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit { 
  
musics:any;
token:String;
public text:string='Recommend';

collection=[];
config={itemsPerPage: 4, currentPage:1};

  constructor(private musicService:MusicService ) {
    for (let i = 1; i <= 20; i++) {
      this.collection.push(`item ${i}`);
    }
   }

  ngOnInit(){


    this.musicService.getBearerToken().subscribe(data=>{
       this.musicService.getMusics(data["access_token"]).subscribe(data=>{
        this.musics=data;
        console.log(this.musics);
       })
    });
   
  
    // if(this.token!=null){
    //   console.log("hello");
    // this.musicService.getMusics(this.token).subscribe(
    //   data=>{
    //     this.musics=data;
    //     console.log(this.musics);
    //   },
    //   (error)=>{
    //     console.log("error");
    //   } 
    //   ); 
    //   } 
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
