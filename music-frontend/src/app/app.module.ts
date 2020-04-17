import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SearchComponent } from './search/search.component';
import {MatButtonModule} from '@angular/material/button';
import { ColumndirDirective } from './columndir.directive';
import { RowdirDirective } from './rowdir.directive';
import { CountryComponent } from './country/country.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import {MatPaginatorModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { MusicService } from './service/music.service';
import { AuthenticationService } from './service/authentication.service';
import { SearchResultComponent } from './search-result/search-result.component';
import { TopTracksComponent } from './top-tracks/top-tracks.component';
import {MatMenuModule} from '@angular/material/menu';
import { MusicCardComponent } from './music-card/music-card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { CountrytwoComponent } from './countrytwo/countrytwo.component';
import { McardtopComponent } from './mcardtop/mcardtop.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CarousalComponent } from './carousal/carousal.component';
import { RegisterService } from './service/register.service';
import { RegistershowComponent } from './registershow/registershow.component';
import { FavouriteComponent } from './favourite/favourite.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { RecommendService } from './service/recommend.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { UnfavrecComponent } from './unfavrec/unfavrec.component';
import { AllrecommendedComponent } from './allrecommended/allrecommended.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

//Adding to the library
library.add(faFilm,faFish);

const routes:Routes =[
  { path: 'country', component: CountryComponent},
  { path: 'countrytwo', component: CountrytwoComponent},  
  { path: 'searchresult', component:SearchResultComponent},
  { path:'toptracks', component:TopTracksComponent},
  { path:'register',component:RegisterComponent},
  { path:'login',component:LoginComponent },
  { path:'',redirectTo:'toptracks',pathMatch:'full'},
  { path: 'registershow', component:RegistershowComponent},
  { path:'favourite', component:FavouriteComponent},
  { path:'recommended', component:RecommendedComponent},
  {path: 'allrecommended', component: AllrecommendedComponent},
  { path:'albumDetails',component:AlbumDetailComponent}
 

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ColumndirDirective,
    RowdirDirective,
    CountryComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    SearchResultComponent,
    TopTracksComponent,
    MusicCardComponent,
    CountrytwoComponent,
    McardtopComponent,
    CarousalComponent,
    RegistershowComponent,
    FavouriteComponent,
    DialogBoxComponent,
    RecommendedComponent,
    AlbumDetailComponent,
    UnfavrecComponent,
    AllrecommendedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatIconModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    NgbModule,
    FlexLayoutModule,
    MatDialogModule ,
    NgxPaginationModule ,
    NgxAudioPlayerModule 
  ],
  providers: [MusicService,AuthenticationService,RegisterService,RecommendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
