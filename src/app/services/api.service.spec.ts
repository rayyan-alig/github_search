import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from '../services/api.service';
import { Repository } from '../Models/repository';

describe('RepositoryService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Repository[]>', () => {
    const username = 'testuser';
    const mockRepositories: Repository[] = [
      { id: 1, name: 'repo1', description: 'Test repository 1', topics: ['topic1', 'topic2'] },
      { id: 2, name: 'repo2', description: 'Test repository 2', topics: ['topic3', 'topic4'] }
    ];

    service.getRepositories(username).subscribe(repositories => {
      expect(repositories.length).toBe(2);
      expect(repositories).toEqual(mockRepositories);
    });

    const req = httpMock.expectOne(`https://api.github.com/users/${username}/repos`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRepositories);
  });
});
