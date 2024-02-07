import { Component, Input } from '@angular/core';
import { Repository } from '../Models/repository';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent {
  @Input() repositories: Repository[] = [];
}


