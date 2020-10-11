import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbInputModule, NbCardModule, NbListModule, NbUserModule, NbButtonModule, NbActionsModule, NbFormFieldModule, NbIconModule, NbBadgeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchResultsListComponent } from './search-results-list/search-results-list.component';
import { SearchResultsItemComponent } from './search-results-item/search-results-item.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsListComponent,
    SearchResultsItemComponent,
    HeaderComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbInputModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbButtonModule,
    NbActionsModule,
    NbFormFieldModule,
    NbIconModule,
    NbBadgeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
