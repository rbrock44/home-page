import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';
import {expectElementToContainContentAtIndex} from '../../constants/expectations';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {SettingsDialogService} from '../../services/settings-dialog.service';
import {SettingsService} from '../../services/settings.service';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  let router: Router;
  let links = [
    'Home',
    'Concerts',
    'Matches'
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        RouterTestingModule,
        HeaderComponent
    ],
}).compileComponents();

    router = TestBed.inject(Router);
    TestBed.inject(SettingsService).updateSetting({showLinks: false});
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct links in header', () => {
    links.forEach((item, index) => {
      expectElementToContainContentAtIndex(
        fixture,
        '.nav-bar-link',
        item,
        index
      );
    });
  });

  it('should not have a settings tab', () => {
    fixture.detectChanges();

    const tabs = Array.from(fixture.nativeElement.querySelectorAll('.nav-bar-link')) as HTMLElement[];
    expect(tabs.map(tab => tab.textContent!.trim())).not.toContain('Settings');
  });

  it('should open the settings popup from the gear button', () => {
    const open = vi.spyOn(TestBed.inject(SettingsDialogService), 'open').mockReturnValue(undefined as never);
    fixture.detectChanges();

    const gear = fixture.nativeElement.querySelector('.secondary-nav [data-settings-nav]');
    expect(gear.getAttribute('aria-label')).toBe('Settings');
    gear.click();

    expect(open).toHaveBeenCalledTimes(1);
  });
});
