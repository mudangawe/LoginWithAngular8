import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {BrowserModule,By} from '@angular/platform-browser'
import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from '@angular/router/testing'
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de:DebugElement;
  let el:HTMLLIElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ReactiveFormsModule,FormsModule,HttpClientModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should call onSubmit Method', async(() =>{
  
    fixture.detectChanges();
    spyOn(component,'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  }));

  it('form should be invalid', async(() =>
  {
    component.loginForm.controls['email'].setValue('Gift');
    component.loginForm.controls['password'].setValue('Murangi');
    expect(component.loginForm.valid).toBeFalsy();
  }))

  it('form should be valid', async(()=>{
    component.loginForm.controls['email'].setValue('ndivhuwo@gmail.com');
    component.loginForm.controls['password'].setValue('Ndivhuwo');
    expect(component.loginForm.valid).toBeTruthy();
  }))


});
