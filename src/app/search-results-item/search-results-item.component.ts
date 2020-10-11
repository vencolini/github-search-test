import { Component, Input, OnInit } from '@angular/core';
// Import interfaces
import { IUserItem } from '../interfaces/github-users';


@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.scss']
})
export class SearchResultsItemComponent implements OnInit {
  
  @Input('user_item')  user: any;

  constructor() { }

  ngOnInit(): void {
  }

}
