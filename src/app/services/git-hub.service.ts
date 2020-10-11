import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

// Import interfaces
import { IUsersList, IGithubUser } from '../interfaces/github-users';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  private base_url: string = 'https://api.github.com';
  private api_v3: string = 'application/vnd.github.v3+json';
  private search_limit:number = 10; // users search limit

  constructor(private http: HttpClient) { }

  
  // https://api.github.com/search/users?q=tom&per_page=5
  getUsersList(username: string): Observable<Array<IUsersList>> {
    return this.http.get<any>(`${this.base_url}/search/users?q=${username}&per_page=${this.search_limit}`, 
      { headers: { 'Accept': this.api_v3 } }).pipe(
        map(result => result.items),
        catchError(this.errorHandler));
  }

  // https://api.github.com/users/tom
  getUser(username: string): Observable<IGithubUser> {
    return this.http.get<IGithubUser>(`${this.base_url}/users/${username}`, 
      { headers: { 'Accept': this.api_v3 } }).pipe(
        catchError(this.errorHandler));
  }

  // https://api.github.com/users/tom/repos
  getUserRepos(username: string): Observable<any> {
    return this.http.get<any>(`${this.base_url}/users/${username}/repos`, 
      { headers: { 'Accept': this.api_v3 } }).pipe(
        catchError(this.errorHandler));
  }

  // https://api.github.com/users/tom/followers
  getUserFollowers(username: string): Observable<any> {
    return this.http.get<any>(`${this.base_url}/users/${username}/followers`, 
      { headers: { 'Accept': this.api_v3 } }).pipe(
        catchError(this.errorHandler));
  }
  
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error);
  } 


}
