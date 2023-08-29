import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl = 'http://localhost:8080/api/v1/todo';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }
}
