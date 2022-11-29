import {Component} from '@angular/core';
import {HomeApiService} from "../../services/home-api.service";

@Component({
  selector: 'app-media-search-widget',
  templateUrl: './media-search-widget.component.html',
  styleUrls: ['./media-search-widget.component.scss']
})
export class MediaSearchWidgetComponent {
  expanded = false;

  // my idea for this component is to have a search icon
  // that when click expands to have an input with delay
  // to show media results below

  constructor(
    private apiService: HomeApiService,
  ) {
  }
}
