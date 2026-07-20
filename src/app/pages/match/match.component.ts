import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { MatchService } from 'src/app/services/match.service';

@Component({
    selector: 'app-match-page',
    templateUrl: './match.component.html',
    styleUrls: ['./match.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
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
