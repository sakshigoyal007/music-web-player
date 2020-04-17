import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faFilm, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import {faMusic} from '@fortawesome/free-solid-svg-icons';
import { RoutingService } from '../service/routing.service';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  filmIcon = faMusic;
  public isMenuCollapsed = true;
  constructor(private routingService : RoutingService,public authService:AuthenticationService) { }
  control: FormControl = new FormControl('');

  ngOnInit(): void {
    if(localStorage.getItem('authToken')!=null)
      this.authService.logged=true;
  }

  checkF(){
    
    if(localStorage.getItem('authToken')!=null){
      // console.log('authtoken',localStorage.getItem('authToken'));
      this.routingService.routeToFavourite();
    }
    else{
      this.routingService.routeToLogin();
    }
 
  }
  checkR(){
    if(localStorage.getItem('authToken')!=null)
       this.routingService.routeToRecommendation();
    else
       this.routingService.routeToLogin();
  }
  checkAR(){
    if(localStorage.getItem('authToken')!=null)
       this.routingService.routeToAllRecommendation();
    else
       this.routingService.routeToLogin();
  }
  logout(){
      this.authService.logged=false;
      this.routingService.routeToTopTracks();
      localStorage.clear();
  }

}
