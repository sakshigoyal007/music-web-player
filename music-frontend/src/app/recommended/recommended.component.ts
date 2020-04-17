import { Component, OnInit } from '@angular/core';
import { MusicService } from '../service/music.service';
import { RecommendService } from '../service/recommend.service';
import { Recommend } from 'Recommend';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  // recommend:Recommend=new Recommend();
  
  public recommend: Array<any>=[];
  // recom: Array<any> = new Array();
  public recomSubject = new BehaviorSubject<Array<any>>([]);
  

 
  constructor(private recommendService:RecommendService) { }

  ngOnInit(): void {

      console.log(localStorage.getItem('authMail'));
      this.recommendService.getRecommand(localStorage.getItem('authMail')).subscribe(data=>{
        console.log(data);
        data.forEach(element => {
          this.recommend.push(element.data)
        });
        this.recomSubject.next(this.recommend);
        console.log(this.recommend);
      })
  }
  getRecommend(){


  }


}
