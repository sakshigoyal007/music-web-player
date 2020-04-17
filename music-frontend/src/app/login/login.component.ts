import { Component, OnInit ,Inject, ɵConsole} from '@angular/core';
import {FormControl, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { Register } from 'register';
import { RegisterService } from '../service/register.service';
import { RoutingService } from '../service/routing.service';
import {AuthenticationService} from '../service/authentication.service';
// import { validateConfig } from '@angular/router/src/config';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RecommendService } from '../service/recommend.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  register:Register=new Register();
  //create array to store
  registers:Array<Register>=[];
  message:any;  
  auth:true;
  token:any;
  userDetails = new FormGroup({    
    email: new FormControl('',[
        Validators.email,
        Validators.minLength(10),
        Validators.maxLength(30),
        Validators.required,
        this.domainfilter
      ]),
    password: new FormControl('',[
        Validators.required,
        Validators.pattern("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,13}")
      ])    
  })

  constructor(private registerService :RegisterService, private routingService:RoutingService,public authService:AuthenticationService,public dialog:MatDialog ,private recommendService:RecommendService ) { }

  ngOnInit() {     
    
  }
  domainfilter(control: AbstractControl):{[key: string]: Boolean} | null{    
    if (control.value.indexOf("gmail.com") > 0){
        return null;
    } else {
        return {domainFilter: true};
    }         
}

 
  doLogin() {
  console.log("in login");
  let res= this.registerService.doLogIn(this.register);
 res.subscribe((data)=>{
  this.message=data; 
  this.token=this.message.token; 
  console.log('authToken for check',this.token);
   if(this.message.token != null){
     this.authService.logged=true;
     localStorage.setItem('authToken',this.token);
     console.log('authToken',localStorage.getItem('authToken'));
     console.log("message from LOGIN "+ this.message.message);
     console.log('email entered is',this.message.userEmail);
     localStorage.setItem('authMail',this.message.userEmail);
     this.recommendService.sendLogData(localStorage.getItem('authMail'));
     this.routingService.routeToTopTracks();     
   } else{     
     console.log("invalid credentials");     
   }   
 },(error)=>{
  console.log("invalid credentials");
  alert("Invalid Credentials");
  
 });
}

getToken():string{
  return localStorage.getItem('authToken');
}
  
// openDialog(): void {
//   const dialogRef = this.dialog.open(d, {
//     width: '250px',
//     data: {name: this.name, animal: this.animal}
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log('The dialog was closed');
//     this.animal = result;
//   });
// }

}


