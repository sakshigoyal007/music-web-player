import { Component, OnInit } from '@angular/core';
import { RecommendService } from '../service/recommend.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-allrecommended',
  templateUrl: './allrecommended.component.html',
  styleUrls: ['./allrecommended.component.css']
})
export class AllrecommendedComponent implements OnInit {

  public recommend: Array<any>=[];
  public recomSubject = new BehaviorSubject<Array<any>>([]);
  

  constructor(private recommendService: RecommendService) { }

  ngOnInit(): void {
  
    console.log(localStorage.getItem('authMail'));
    this.recommendService.getAllRecommand(localStorage.getItem('authMail')).subscribe(data=>{
      console.log(data);
      data.forEach(element => {
        this.recommend.push(element.data)
      });
      this.recomSubject.next(this.recommend);
      console.log(this.recommend);
    })
  }

}
