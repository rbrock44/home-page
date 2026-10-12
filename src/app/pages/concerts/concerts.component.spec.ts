import { provideHttpClientTesting } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { YesNoDropdownComponent } from "../../components/yes-no-dropdown/yes-no-dropdown.component";
import { HEADER } from "../../constants/expectations";
import {
  expectElementToContainContent
} from "../../constants/expectations";
import { AlertService } from "../../services/alert.service";
import { DateService } from "../../services/date.service";
import { HomeApiService } from "../../services/home-api.service";
import { SettingsService } from "../../services/settings.service";
import { ConcertComponent } from "./concerts.component";
import { ConcertService } from "../../services/concert.service";
import { provideHttpClient, withXhr } from "@angular/common/http";

describe('ConcertsComponent', () => {
  let fixture: ComponentFixture<ConcertComponent>;
  let component: ConcertComponent;
  let router: Router;
  let settingsService: SettingsService;
  let alertService: AlertService;
  let dateService: DateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        ConcertComponent,
        YesNoDropdownComponent],
    providers: [
        HomeApiService,
        SettingsService,
        provideHttpClient(withXhr()),
        provideHttpClientTesting()
    ]
}).compileComponents();

    router = TestBed.inject(Router);
    alertService = TestBed.inject(AlertService);
    dateService = TestBed.inject(DateService);
    vi.spyOn(dateService, 'now').mockReturnValue(1);
    settingsService = TestBed.inject(SettingsService);
    fixture = TestBed.createComponent(ConcertComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('shows the full list again when reopened after a search', () => {
    const service = TestBed.inject(ConcertService);
    const total = service.rowCount();
    fixture.detectChanges();
    service.search('zzz-no-match');
    fixture.destroy();

    TestBed.createComponent(ConcertComponent).detectChanges();

    expect(service.rowCount()).toBe(total);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a title', () => {
    expectElementToContainContent(fixture, HEADER, 'Concerts');
  });
});
