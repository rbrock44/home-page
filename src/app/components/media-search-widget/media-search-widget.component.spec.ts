import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeApiService} from "../../services/home-api.service";
import {MediaSearchWidgetComponent} from "./media-search-widget.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MaterialModule} from "../../material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  clickElement,
  expectElementAbsent,
  expectElementPresent,
  expectElementToContainContent,
  expectElementToContainContentAtIndex
} from "../../constants/expectations.spec";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {of} from "rxjs";

describe('MediaSearchWidgetComponent', () => {
  let fixture: ComponentFixture<MediaSearchWidgetComponent>;
  let component;
  let service: HomeApiService;
  const results = ['anything', 'other'];
  const criteria = 'search for this';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientTestingModule,
        MaterialModule,
        ReactiveFormsModule,
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

  it('should contain expansion panel', () => {
    expectElementPresent(fixture, 'mat-accordion');
    expectElementPresent(fixture, 'mat-expansion-panel');
    expectElementToContainContent(fixture, 'mat-panel-title', 'Media Search')
  });

  it('should expand panel and have a body', () => {
    expectElementAbsent(fixture, '.results');

    clickElement(fixture, 'mat-expansion-panel-header');
    fixture.detectChanges();

    expectElementPresent(fixture, 'input');
    expectElementPresent(fixture, '.search');
    expectElementAbsent(fixture, '.results');
    expectElementToContainContent(fixture, 'mat-icon', 'search');
  });

  it('should show results when they exist', () => {
    expectElementAbsent(fixture, '.results');

    clickElement(fixture, 'mat-expansion-panel-header');
    component.searchResults = results;

    fixture.detectChanges();

    expectElementPresent(fixture, '.results');
    expectElementToContainContentAtIndex(fixture, 'p', results[0], 0);
    expectElementToContainContentAtIndex(fixture, 'p', results[1], 1);
  });

  it('should search for media results', () => {
    const spy = spyOn(service, 'searchMedia').and.returnValue(of(results))

    component.control.setValue(criteria);
    clickElement(fixture, 'mat-icon');
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith(criteria);
  });

  it('should handle search for media results error', () => {
    expectElementAbsent(fixture, '.error');

    component.hasError = true;
    fixture.detectChanges();

    expectElementToContainContent(fixture, 'p', 'Error Occurred')
  });

  it('should show no results when searched for media with no results', () => {
    expectElementAbsent(fixture, 'p')
    spyOn(service, 'searchMedia').and.returnValue(of([]))

    component.control.setValue(criteria);
    clickElement(fixture, 'mat-icon');
    fixture.detectChanges();

    expectElementToContainContent(fixture, 'p', 'No Results')
  });

  it('should reset when closed', () => {
    component.expanded = true;
    component.hasSearched = true;
    component.hasError = true;
    component.searchResults = results;
    component.control.setValue(results[0])
    fixture.detectChanges();

    component.close();
    fixture.detectChanges();

    expect(component.expanded).toBeFalsy();
    expect(component.hasSearched).toBeFalsy();
    expect(component.hasError).toBeFalsy();
    expect(component.searchResults).toEqual([]);
    expect(component.control.value).toEqual('');
  });
});
