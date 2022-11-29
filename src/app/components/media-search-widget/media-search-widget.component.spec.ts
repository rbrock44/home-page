import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeApiService} from "../../services/home-api.service";
import {MediaSearchWidgetComponent} from "./media-search-widget.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MediaSearchWidgetComponent', () => {
  let fixture: ComponentFixture<MediaSearchWidgetComponent>;
  let component;
  let service: HomeApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        MediaSearchWidgetComponent
      ],
      providers: [
        HomeApiService,
      ]
    }).compileComponents();

    service = TestBed.get(HomeApiService);
    fixture = TestBed.createComponent(MediaSearchWidgetComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
