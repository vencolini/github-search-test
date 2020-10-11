import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GitHubService } from '../services/git-hub.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
// Import interfaces
import { IUsersList, IGithubUser } from '../interfaces/github-users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class UserDetailsComponent implements OnInit {

  public active_user_login: string = "";
  public active_user: IGithubUser;
  public repos: Object;
  public followers: Object;

  constructor(  private route: ActivatedRoute, 
                private gitHubService: GitHubService ) { }

  ngOnInit(): void {
    this.active_user_login = this.route.snapshot.paramMap.get('user');
    console.log(this.route.snapshot.paramMap.get('user'));

    this.gitHubService.getUser(this.active_user_login)
      .subscribe(data => {
        this.active_user = data;
        console.log("user data", data);
      });

    this.gitHubService.getUserRepos(this.active_user_login)
      .subscribe(data => {
        this.repos = data;
        console.log("user repos", data);
      });

    this.gitHubService.getUserFollowers(this.active_user_login)
      .subscribe(data => {
        this.followers = data;
        console.log("user followers", data);
      });
  }

}
