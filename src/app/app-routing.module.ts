import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { SearchComponent } from './search/search.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'user-details/:user', component: UserDetailsComponent },
  // wildcard route to handle uknown paths gracefully
  { path: '**', redirectTo: ''}, // redirect unknown paths to home /
  // or we can use special component to show 404 page
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }