import { Component, OnInit, Input, SystemJsNgModuleLoader } from '@angular/core';
import { Register } from 'register';
import { Favourite } from 'favourite';
import { Recommend } from 'Recommend';
import { RecommendService } from '../service/recommend.service';
import { FavouriteService } from '../service/favourite.service';
import { error } from '@angular/compiler/src/util';
import { RoutingService } from '../service/routing.service';

@Component({
  selector: 'app-unfavrec',
  templateUrl: './unfavrec.component.html',
  styleUrls: ['./unfavrec.component.css']
})
export class UnfavrecComponent implements OnInit {
  @Input() artist: any;
  @Input() parentList;
  @Input() parentSub;
  message: any;
  register: Register = new Register();
  favourite: Favourite = new Favourite();
  recommend: Recommend = new Recommend();

  constructor(private recommendService: RecommendService, private favouriteService: FavouriteService,private routerService:RoutingService) { }

  ngOnInit(): void {
    console.log(this.artist)
  }
  
  doUnFavourite() {
    this.favourite.userId = localStorage.getItem('authMail');
    this.favourite.dataId = this.artist.id;
  
    // console.log(this.favourite.userId);
    // this.recommend.userId=
    let res = this.favouriteService.deleteFavourite(this.favourite.dataId,this.favourite.userId);
    console.log(this.favourite);
    res.subscribe((data) => {
      let object = this.parentList.find(o=>o.dataId === this.artist.id);
      console.log(object);
      let index = this.parentList.indexOf(object);
      console.log(index);
      this.parentList.splice(index,1);
      this.parentSub.next(this.parentList);
      // this.message = data;
      // console.log("message from unfav" + this.message);
    })

  }
  doUnRecommend() {
    this.recommend.userId = localStorage.getItem('authMail');
    this.recommend.dataId = this.artist.id;
    this.recommend.data = this.artist;
    // console.log(this.artist);
    // this.recommend.userId=
    let res = this.recommendService.deleteRecommend(this.recommend.dataId,this.recommend.userId);
    // console.log(this.recommend);
    res.subscribe((data) => {
      // let index = this.parentList.indexOf(this.parentList.find(o=>o.dataId == this.artist.id));
      // console.log(index);
      // this.parentList.splice(index,1);
      // this.parentSub.next(this.parentList);
      
    },error=>{
      console.log(error.status);
      if(error.status==200){
        
        // let index = this.parentList.indexOf(this.parentList.find(o=>{
        //   console.log(o.id);
        //   console.log(this.artist.id);
        //   o.id == this.artist.id;
        // }));
        // console.log(index);
        // this.parentList.splice(index,1);
        // this.parentSub.next(this.parentList);
      }
    })

  }


}
