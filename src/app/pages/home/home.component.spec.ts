import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {HomeComponent} from "./home.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HomeApiService} from "../../services/home-api.service";
import {SettingsService} from "../../services/settings.service";

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        HomeComponent
      ],
      providers: [
        HomeApiService,
        SettingsService
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
