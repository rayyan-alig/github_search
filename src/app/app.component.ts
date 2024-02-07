import { Component } from '@angular/core';
import { Repository } from './Models/repository';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fyle-frontend-challenge';
  repositories: Repository[] = [];

  constructor(private repositoryService: ApiService) { }

  searchRepositories(username: string) {
    this.repositoryService.getRepositories(username)
      .subscribe(repos => this.repositories = repos);
  }
}
