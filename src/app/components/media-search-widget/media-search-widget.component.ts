import {Component, ChangeDetectionStrategy} from '@angular/core';
import {HomeApiService} from "../../services/home-api.service";
import { UntypedFormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-media-search-widget',
    templateUrl: './media-search-widget.component.html',
    styleUrls: ['./media-search-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatIcon, FormsModule, ReactiveFormsModule]
})
export class MediaSearchWidgetComponent {
  expanded = false;
  refreshed = false;
  hasSearched = false;
  hasError = false;
  searchResults: string[] = [];
  control: UntypedFormControl = new UntypedFormControl('');

  constructor(
    private apiService: HomeApiService,
  ) {
  }

  search(): void {
    this.hasError = false;
    this.refreshed = false;
    this.searchResults = [];
    this.apiService.searchMedia(this.control.value).subscribe(
      results => {
        this.hasSearched = true;
        this.searchResults = results;
      },
      () => {
        this.hasError = true;
      }
    );
  };

  refresh(event: Event): void {
    event.preventDefault();
    this.refreshed = false;
    this.hasError = false;
    this.apiService.refreshMedia().subscribe(
      () => {
        this.refreshed = true;
      },
      () => {
        this.hasError = true;
      }
    );
  }

  close(): void {
    this.expanded = false;
    this.refreshed = false;
    this.hasSearched = false;
    this.hasError = false;
    this.searchResults = [];
    this.control.setValue('');
  };
}
