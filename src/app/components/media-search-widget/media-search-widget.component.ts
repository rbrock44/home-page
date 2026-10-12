import {Component, signal} from '@angular/core';
import {HomeApiService} from "../../services/home-api.service";
import { UntypedFormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-media-search-widget',
    templateUrl: './media-search-widget.component.html',
    styleUrls: ['./media-search-widget.component.scss'],
    imports: [MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatIcon, FormsModule, ReactiveFormsModule]
})
export class MediaSearchWidgetComponent {
  expanded = signal(false);
  refreshed = signal(false);
  hasSearched = signal(false);
  hasError = signal(false);
  searchResults = signal<string[]>([]);
  control: UntypedFormControl = new UntypedFormControl('');

  constructor(
    private apiService: HomeApiService,
  ) {
  }

  search(): void {
    this.hasError.set(false);
    this.refreshed.set(false);
    this.searchResults.set([]);
    this.apiService.searchMedia(this.control.value).subscribe(
      results => {
        this.hasSearched.set(true);
        this.searchResults.set(results);
      },
      () => {
        this.hasError.set(true);
      }
    );
  };

  refresh(event: Event): void {
    event.preventDefault();
    this.refreshed.set(false);
    this.hasError.set(false);
    this.apiService.refreshMedia().subscribe(
      () => {
        this.refreshed.set(true);
      },
      () => {
        this.hasError.set(true);
      }
    );
  }

  close(): void {
    this.expanded.set(false);
    this.refreshed.set(false);
    this.hasSearched.set(false);
    this.hasError.set(false);
    this.searchResults.set([]);
    this.control.setValue('');
  };
}
