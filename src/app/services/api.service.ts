import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../Models/repository';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getRepositories(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`https://api.github.com/users/${username}/repos`);
  }






  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
