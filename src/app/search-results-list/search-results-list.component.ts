import { Component, OnInit, Input } from '@angular/core';
// Import interfaces
import { IUsersList } from '../interfaces/github-users';

@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss']
})
export class SearchResultsListComponent implements OnInit {

  @Input('users') public users: IUsersList;

  constructor() { }

  ngOnInit(): void {
  }

}
