import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
