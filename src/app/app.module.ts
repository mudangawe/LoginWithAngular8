import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {RouterModule,Routes,Router} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ServiceService} from './service/service.service'

const appRoutes: Routes =[
  {path:'', component:LoginComponent},
  {path:'signUp', component:RegisterComponent},
  {path:'home',component:HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
