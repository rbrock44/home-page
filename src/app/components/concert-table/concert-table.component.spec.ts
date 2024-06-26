import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material.module';
import { ConcertTableComponent } from './concert-table.component';

describe('RecipeTableComponent', () => {
  let fixture: ComponentFixture<ConcertTableComponent>;
  let component: ConcertTableComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MaterialModule,
        RouterTestingModule
      ],
      declarations: [
        ConcertTableComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConcertTableComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
