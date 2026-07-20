import { provideHttpClientTesting } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { YesNoDropdownComponent } from "../../components/yes-no-dropdown/yes-no-dropdown.component";
import { HEADER } from "../../constants/constants.spec";
import {
  expectElementToContainContent
} from "../../constants/expectations.spec";
import { MaterialModule } from "../../material.module";
import { AlertService } from "../../services/alert.service";
import { DateService } from "../../services/date.service";
import { HomeApiService } from "../../services/home-api.service";
import { SettingsService } from "../../services/settings.service";
import { ConcertComponent } from "./concerts.component";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

describe('ConcertsComponent', () => {
  let fixture: ComponentFixture<ConcertComponent>;
  let component;
  let router: Router;
  let settingsService: SettingsService;
  let alertService: AlertService;
  let dateService: DateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [
        ConcertComponent,
        YesNoDropdownComponent
    ],
    imports: [FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MaterialModule],
    providers: [
        HomeApiService,
        SettingsService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
}).compileComponents();

    router = TestBed.inject(Router);
    alertService = TestBed.inject(AlertService);
    dateService = TestBed.inject(DateService);
    spyOn(dateService, 'now').and.returnValue(1);
    settingsService = TestBed.inject(SettingsService);
    fixture = TestBed.createComponent(ConcertComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a title', () => {
    expectElementToContainContent(fixture, HEADER, 'Links');
  });
});
