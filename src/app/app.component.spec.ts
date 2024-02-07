import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RepoListComponent } from './repo-list/repo-list.component'
import { SearchBarComponent } from './search-bar/search-bar.component'; 
import { FormsModule } from '@angular/forms'; 
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchBarComponent, 
        RepoListComponent
      ],
      imports: [
        FormsModule, 
        HttpClientTestingModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fyle-frontend-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app.title).toEqual('fyle-frontend-challenge');
  });

});

