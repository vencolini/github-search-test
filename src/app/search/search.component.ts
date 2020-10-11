import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GitHubService } from '../services/git-hub.service';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  public users: any = [];
  public user_search_params: string = "";

  @ViewChild('user_input') input: ElementRef;

  // DI of the GitHub Service
  constructor(private gitHubService: GitHubService) { }

  ngOnInit(): void {
    
  }


  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      filter(text => text.length > 2),
      debounceTime(200),
      distinctUntilChanged(),
    ).subscribe(searchValue => {
      // Handle the data from the API
      this.onSearchChange(searchValue);
      console.log("this.users in saerch component", searchValue);
    });
  }

  onSearchChange(searchValue: string): void {  
    console.log(searchValue);
    if (searchValue.length > 2) {
      this.gitHubService.getUsersList(searchValue).pipe(
      )
      .subscribe(data => {
        this.users = data;
        console.log("this.users in saerch component", this.users);
      });
    }
  }

}
