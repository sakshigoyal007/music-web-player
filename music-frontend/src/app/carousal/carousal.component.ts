import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toptracks(){
     this.router.navigate(['/toptracks']);
  }

}
