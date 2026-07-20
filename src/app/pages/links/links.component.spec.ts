import { provideHttpClientTesting } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { YesNoDropdownComponent } from "../../components/yes-no-dropdown/yes-no-dropdown.component";
import { APPLY_SETTING_SUCCESS_MESSAGE } from "../../constants/constants";
import { HEADER } from "../../constants/constants.spec";
import {
  clickElementAtIndex,
  expectElementPresent,
  expectElementPresentAtIndex,
  expectElementToContainContent,
  expectElementToContainContentAtIndex
} from "../../constants/expectations.spec";
import { MaterialModule } from "../../material.module";
import { AlertService } from "../../services/alert.service";
import { DateService } from "../../services/date.service";
import { HomeApiService } from "../../services/home-api.service";
import { SettingsService } from "../../services/settings.service";
import { LinkComponent } from './links.component';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from "@angular/common/http";

describe('LinksPageComponent', () => {
  let fixture: ComponentFixture<LinkComponent>;
  let component;
  let router: Router;
  let settingsService: SettingsService;
  let alertService: AlertService;
  let dateService: DateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [
        LinkComponent,
        YesNoDropdownComponent
    ],
    imports: [FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MaterialModule],
    providers: [
        HomeApiService,
        SettingsService,
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
}).compileComponents();

    router = TestBed.inject(Router);
    alertService = TestBed.inject(AlertService);
    dateService = TestBed.inject(DateService);
    spyOn(dateService, 'now').and.returnValue(1);
    settingsService = TestBed.inject(SettingsService);
    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a title', () => {
    expectElementToContainContent(fixture, HEADER, 'Links');
  });
});
