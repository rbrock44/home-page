import {ComponentFixture, TestBed} from '@angular/core/testing';
import {YesNoDropdownComponent} from './yes-no-dropdown.component';
import {CommonModule} from '@angular/common';
import {UntypedFormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {expectElementPresent, expectElementToContainContent} from '../../constants/expectations';

describe('YesNoDropdownComponent', () => {
  let fixture: ComponentFixture<YesNoDropdownComponent>;
  let component;
  let name = 'name';
  let yesOption = 'yes';
  let noOption = 'no';
  let htmlId = 'htmlId';
  let control = new UntypedFormControl('');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        YesNoDropdownComponent
    ],
}).compileComponents();

    fixture = TestBed.createComponent(YesNoDropdownComponent);
    component = fixture.debugElement.componentInstance;
    fixture.componentRef.setInput('name', name);
    fixture.componentRef.setInput('htmlId', htmlId);
    fixture.componentRef.setInput('yesOption', yesOption);
    fixture.componentRef.setInput('noOption', noOption);
    fixture.componentRef.setInput('control', control);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have dropdown', () => {
    expectElementToContainContent(fixture, '[data-dropdown-label]', name);
    expectElementPresent(fixture, 'mat-select');
    // verifyDropdownOptions(fixture, options, values, index);
  });
});
