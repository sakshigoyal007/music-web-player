import { Component, OnInit, Input } from '@angular/core';
import { Register } from 'register';
import { Recommend } from 'Recommend';
import { Favourite } from 'favourite';
import { RecommendService } from '../service/recommend.service';
import { FavouriteService } from '../service/favourite.service';
import { RoutingService } from '../service/routing.service';

@Component({
  selector: 'app-mcardtop',
  templateUrl: './mcardtop.component.html',
  styleUrls: ['./mcardtop.component.css']
})
export class McardtopComponent implements OnInit {

  @Input()
  artist:any;
  message:any;
  register:Register=new Register();
  favourite:Favourite=new Favourite();
  recommend:Recommend= new Recommend();

  public text:string='Recommend';
  msbapTitle = 'Audio Title';
  msbapAudioUrl:any;
msbapDisplayTitle = false;
msbapDisplayVolumeControls = true;

  constructor(private recommendService:RecommendService,private favouriteService:FavouriteService,private routingService: RoutingService) { }

  ngOnInit(): void {
    this.msbapAudioUrl=this.artist.preview_url;
    console.log("music card component");
    console.log(this.artist.id);
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
  doRecommend() {
    if (localStorage.getItem('authToken') == null) {
      this.routingService.routeToLogin();
    }
    else {
      this.recommend.userId = localStorage.getItem('authMail');
      this.recommend.dataId = this.artist.id;
      this.recommend.data = this.artist;
      console.log(this.recommend.userId);
      // this.recommend.userId=
      let res = this.recommendService.doRecommendation(this.recommend);
      console.log(this.recommend);
      res.subscribe((data) => {
        this.message = data;
        console.log("message from fav hwllllllllllll" + this.message);
      }, error => {
        console.log(error.status)
        if (error.status == 200) {
          console.log("message from fav hwllllllllllll" + this.message);
        }
      })
    }
  }
  doFavourite() {
    if (localStorage.getItem('authToken') == null) {
      this.routingService.routeToLogin();
    }
    else {
      this.favourite.userId = localStorage.getItem('authMail');
      this.favourite.dataId = this.artist.id;
      this.favourite.data = this.artist;
      console.log(this.favourite.userId);
      // this.recommend.userId=
      let res = this.favouriteService.doFavourites(this.favourite);
      console.log(this.favourite);
      res.subscribe((data) => {
        this.message = data;
        console.log("message from fav" + this.message);
      })
    }
  }

    onNavigate(){
      // your logic here.... like set the url 
      const url = this.artist.external_urls.spotify;
      window.open(url, '_blank');
  }
  
}
