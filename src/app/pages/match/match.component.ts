import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { MatchService } from 'src/app/services/match.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatchTableComponent } from '../../components/match-table/match-table.component';

@Component({
    selector: 'app-match-page',
    templateUrl: './match.component.html',
    styleUrls: ['./match.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatFormField, MatLabel, MatInput, FormsModule, ReactiveFormsModule, MatIcon, MatchTableComponent]
})
export class MatchComponent {
  searchControl: UntypedFormControl = new UntypedFormControl('');

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(value => {
      this.matchService.search(value);
    });
  }
  
  constructor(public matchService: MatchService) {
  }
}
