import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material.module';
import { ConcertTableComponent } from './concert-table.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('RecipeTableComponent', () => {
  let fixture: ComponentFixture<ConcertTableComponent>;
  let component: ConcertTableComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [
        ConcertTableComponent
    ],
    imports: [BrowserAnimationsModule,
        MaterialModule,
        RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();

    fixture = TestBed.createComponent(ConcertTableComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
