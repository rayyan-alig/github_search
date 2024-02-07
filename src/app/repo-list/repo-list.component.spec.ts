import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoListComponent } from './repo-list.component';
import { Repository } from '../Models/repository';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display repositories', () => {
    const repositories: Repository[] = [
      { id: 1, name: 'repo1', description: 'Test repository 1', topics: ['topic1', 'topic2'] },
      { id: 2, name: 'repo2', description: 'Test repository 2', topics: ['topic3', 'topic4'] }
    ];
    component.repositories = repositories;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const repoElements = compiled.querySelectorAll('li');
    expect(repoElements.length).toBe(repositories.length);
    repoElements.forEach((element: any, index: number) => {
      expect(element.textContent).toContain(repositories[index].name);
      expect(element.textContent).toContain(repositories[index].description);
      const topicsString = repositories[index].topics.join(', '); 
      expect(element.textContent).toContain(topicsString); 
    });
  });




  it('should display no repositories found message when repositories array is empty', () => {
    component.repositories = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const noRepositoriesMessage = compiled.querySelector('p');
    expect(noRepositoriesMessage.textContent).toContain('No repositories found.');
  });
});
