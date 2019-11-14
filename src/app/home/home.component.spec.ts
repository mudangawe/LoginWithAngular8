import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserModule,By} from '@angular/platform-browser'
import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
describe('HomeComponent', () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
  let el:HTMLLIElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[BrowserModule,HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
});
