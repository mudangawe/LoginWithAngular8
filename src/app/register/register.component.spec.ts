import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserModule,By} from '@angular/platform-browser'
import { RegisterComponent } from './register.component';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { DebugElement } from '@angular/core';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let de:DebugElement;
  let el:HTMLElement; 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent],
      imports:[ReactiveFormsModule,BrowserModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should call onSubmit method',async(() =>{
    fixture.detectChanges();
    spyOn(component,'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }))
  it('form should be invalid',()=>{
    component.registerForm.controls['name'].setValue('');
    component.registerForm.controls['surname'].setValue('');
    component.registerForm.controls['email'].setValue('');
    component.registerForm.controls['number'].setValue('');
    component.registerForm.controls['password'].setValue('');
    expect(component.registerForm.valid).toBeFalsy();
  })
  it('form should be valid', ()=>
  {
    component.registerForm.controls['name'].setValue('Ndivhuwo');
    component.registerForm.controls['surname'].setValue('Ramashia');
    component.registerForm.controls['email'].setValue('ndivhuwo.ng@gmail.com');
    component.registerForm.controls['number'].setValue('12345');
    component.registerForm.controls['password'].setValue('Murangi');
    expect(component.registerForm.valid).toBeTruthy();
  })
});
