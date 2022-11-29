import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AlertComponent} from './alert.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AlertService} from "../../services/alert.service";

describe('AlertComponent', () => {
  let fixture: ComponentFixture<AlertComponent>;
  let component;
  let service: AlertService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AlertComponent
      ],
      providers: [
        AlertService,
      ]
    }).compileComponents();

    service = TestBed.get(AlertService);
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
