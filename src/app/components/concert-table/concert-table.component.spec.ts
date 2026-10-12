import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConcertTableComponent } from './concert-table.component';
import { SettingsService } from 'src/app/services/settings.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';

describe('RecipeTableComponent', () => {
  let fixture: ComponentFixture<ConcertTableComponent>;
  let component: ConcertTableComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule, ConcertTableComponent],
    providers: [provideHttpClient(withXhr(), withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();

    fixture = TestBed.createComponent(ConcertTableComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('hides the price column without the prices url param', () => {
    expect(component.displayColumns).not.toContain('price');
  });

  it('shows the price column with the prices url param', () => {
    TestBed.inject(SettingsService).showPrices = true;

    expect(TestBed.createComponent(ConcertTableComponent).componentInstance.displayColumns).toContain('price');
  });
});
