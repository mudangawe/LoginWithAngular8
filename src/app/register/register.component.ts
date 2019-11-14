import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {ServiceService} from '../service/service.service'
import { Imodel } from '../interface/Imodel';
import {Router} from "@angular/router"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  feedback:Imodel
  registerForm:FormGroup;
  userForm= {
    name: " ",
    surname: " ",
    email: ' ',
    password: ' ',
    number: ' '
  }
  constructor(private http:ServiceService, private router:Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void{
    this.registerForm = new FormGroup({
      'name': new FormControl(this.userForm.name,[Validators.required]),
      'surname' : new FormControl(this.userForm.surname,Validators.required),
      'email' : new FormControl(this.userForm.email,[Validators.required,Validators.email]),
      'number': new FormControl(this.userForm.number, [Validators.required]),
      'password': new FormControl(this.userForm.password,[Validators.required,Validators.minLength(6)]) 
    })
  }

  onSubmit(){
    console.log(this.registerForm.value)
    this.http.postData(this.registerForm.value).subscribe(x => {this.feedback  = x ; this.grantRespond()});
  }
  grantRespond()
  {
      if(this.feedback.userAdded)
      {
        this.router.navigate(['/home'])
      }
  }

}
