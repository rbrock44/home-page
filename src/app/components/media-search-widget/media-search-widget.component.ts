import {Component} from '@angular/core';
import {HomeApiService} from "../../services/home-api.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-media-search-widget',
  templateUrl: './media-search-widget.component.html',
  styleUrls: ['./media-search-widget.component.scss']
})
export class MediaSearchWidgetComponent {
  expanded = false;
  hasSearched = false;
  hasError = false;
  searchResults: string[] = [];
  control: FormControl = new FormControl('');

  constructor(
    private apiService: HomeApiService,
  ) {
  }

  search(): void {
    this.hasError = false;
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

  close(): void {
    this.expanded = false;
    this.hasSearched = false;
    this.hasError = false;
    this.searchResults = [];
    this.control.setValue('');
  };
}
