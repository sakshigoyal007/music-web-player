import { Component, OnInit } from '@angular/core';
import { RecommendService } from '../service/recommend.service';
import { Recommend } from 'Recommend';
import { FavouriteService } from '../service/favourite.service';
import { Favourite } from 'favourite';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  recommended:any;
  favourite:Favourite=new Favourite();
  message:any;

  fav: Array<any> = new Array()

  constructor(private favouriteService:FavouriteService) { }

  ngOnInit(): void {
    
      this.favouriteService.getFavourite(localStorage.getItem('authMail')).subscribe(data=>{
        this.fav=[];
        this.recommended = data
        console.log(data);
        console.log(typeof(data));
        data.forEach(element => {
          this.fav.push(element.data);
          
        });
        // console.log(data[0]._id);
        // console.log(data[0].data);
        // console.log(data[0].data["name"]);
        // this.recommended=data[0].data;
      })
    

  }

  doRecommend(){
    let res= this.favouriteService.doFavourites(this.recommended);
    res.subscribe((data)=>{
      this.message=data;
      console.log("message from recommend"+this.message);
    
    })
   
   }
   

}
