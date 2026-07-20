import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material.module';
import { MatchTableComponent } from './match-table.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('MatchTableComponent', () => {
  let fixture: ComponentFixture<MatchTableComponent>;
  let component: MatchTableComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [
        MatchTableComponent
    ],
    imports: [BrowserAnimationsModule,
        MaterialModule,
        RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();

    fixture = TestBed.createComponent(MatchTableComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
