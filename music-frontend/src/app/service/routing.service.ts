import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router:Router) { }

  routeToCountries(){
    this.router.navigate(['country']);
  }
  routeToCountryTwo(){
    this.router.navigate(['countrytwo']);
  }

  routeToSerchResult(){
    this.router.navigate(['searchresult'])
  }

  routeToTopTracks(){
    this.router.navigate(['toptracks']);
  }

  routeToFavourite(){
    this.router.navigate(['favourite']);
  }
  routeToRecommendation(){
    this.router.navigate(['recommended']);
    
  }
  routeToLogin(){
     this.router.navigate(['login']);
  }
  routeToSignUp(){
     this.router.navigate(['register']);
  }

  routeToAllRecommendation(){
    this.router.navigate(['allrecommended']);
  }
  routeToAllDetails(){
    this.router.navigate(['albumDetails']);
  }
}
