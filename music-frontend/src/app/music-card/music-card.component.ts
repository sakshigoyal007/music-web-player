import { Component, OnInit, Input } from '@angular/core';
import { RecommendService } from '../service/recommend.service';
import { Register } from 'register';
import { Recommend } from 'Recommend';
import { FavouriteService } from '../service/favourite.service';
import { Favourite } from 'favourite';
import { MusicService } from '../service/music.service';
import { RoutingService } from '../service/routing.service';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent implements OnInit {

  @Input()
  artist:any;
  message:any;
  register:Register=new Register();
  favourite:Favourite=new Favourite();
  recommend:Recommend= new Recommend();
  url:any;
  public text:string='Recommend';
  constructor(private recommendService:RecommendService,private favouriteService:FavouriteService, private musicService: MusicService, private routingService: RoutingService) { }

  ngOnInit(): void {
    console.log("music card component");
    console.log(this.artist.images[0]);
    if(this.artist.images.length == 0){
      console.log("helooo");
      this.url="../../assets/img/nullimg1.jpeg";
    } else{
      this.url=this.artist.images[1]['url'];
    }
    //   this.recommendService.logData.subscribe(data=>{
    //     this.favourite.userId=data;
    // })
    
  }

  public changeText(){
    if(this.text==='Recommend'){
      this.text='Unrecommend'
    }
    else{
      this.text='Recommend'

    }

  }
  doRecommend(){
    this.recommend.userId = localStorage.getItem('authMail');
    this.recommend.dataId=this.artist.id;
    this.recommend.data=this.artist;   
    console.log(this.recommend.userId);
    // this.recommend.userId=
    let res= this.recommendService.doRecommendation(this.recommend);
    console.log(this.recommend);
    res.subscribe((data)=>{
      this.message=data;
      console.log("message from fav"+this.message);
      
    })
   
   }
   doFavourite(){
     this.favourite.userId = localStorage.getItem('authMail');
    this.favourite.dataId=this.artist.id;
    this.favourite.data=this.artist;   
    console.log(this.favourite.userId);
    // this.recommend.userId=
    let res= this.favouriteService.doFavourites(this.favourite);
    console.log(this.favourite);
    res.subscribe((data)=>{
      this.message=data;
      console.log("message from fav"+this.message);
      
    })
   
   }
   GoToDetails(){
    console.log(this.artist.id);
    this.musicService.changeMusicId(this.artist.id);
    this.routingService.routeToAllDetails();
  }
}
