import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ServiceService} from '../service/service.service';
import {Routes, Router} from '@angular/router'; 
import {Observable } from 'rxjs';
import {Imodel} from '../interface/Imodel'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  feedback:Imodel
  loginForm :FormGroup;
  userData={
    email:"",
    password:''
  }
  constructor(private http:ServiceService, private router : Router ) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm():void{
    this.loginForm =new FormGroup({
      'email' : new FormControl(this.userData.email,[Validators.required, Validators.email]),
      'password' : new FormControl(this.userData.password,[Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit()
  {
    this.http.postData(this.loginForm.value).subscribe(x => {this.feedback = x;   this.grantOrDenyAccess(); });
  
  }

  grantOrDenyAccess()
  {
    if(!this.feedback.email)
    {
      console.log("Incorrect email")
    }
    else if(!this.feedback.password)
    {
      console.log("Incorrect password");
    }
    else
    {
      this.router.navigate(['/home'])
    }
   
  }


}
