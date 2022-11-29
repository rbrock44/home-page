import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FightCardComponent} from "./fight-card.component";
import {
  clickElementAtIndex,
  expectElementAbsent,
  expectElementToContainContentAtIndex
} from "../../constants/expectations.spec";
import {WindowService} from "../../services/window.service";
import {Fight} from "../../models/fight.model";

describe('FightCardComponent', () => {
  let fixture: ComponentFixture<FightCardComponent>;
  let component;
  let windowService: WindowService
  const expected = [
    new Fight({
      title: 'fight 1 vs title 1',
      link: 'fight link 1',
      titleFight: true,
    }),
    new Fight({
      title: 'fight 2 vs title 2',
      link: 'fight link 2',
      titleFight: false,
    }),
  ];
  const elements = [
    '.game-label',
    '.person-label',
    '.at-label'
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FightCardComponent
      ],
    }).compileComponents();

    windowService = TestBed.get(WindowService)
    fixture = TestBed.createComponent(FightCardComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show fights on card', () => {
    elements.forEach(element => {
      expectElementAbsent(fixture, element);
    });

    component.fights = expected;
    fixture.detectChanges();

    expectElementToContainContentAtIndex(fixture, '.person-label', 'fight 1', 0);
    expectElementToContainContentAtIndex(fixture, '.person-label', 'title 1', 1);
    expectElementToContainContentAtIndex(fixture, '.at-label', 'vs.', 0);
    expectElementToContainContentAtIndex(fixture, '.person-label', 'fight 2', 2);
    expectElementToContainContentAtIndex(fixture, '.person-label','title 2', 3);
    expectElementToContainContentAtIndex(fixture, '.at-label', 'vs.', 1);
  });

  it('should route when fight clicked', () => {
    const spy = spyOn(windowService, 'openBlank');
    component.fights = expected;
    fixture.detectChanges();
    clickElementAtIndex(fixture, '.cursor', 0);
    expect(spy).toHaveBeenCalledWith(expected[0].link);
  });
});
