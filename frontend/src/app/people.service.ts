import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {element} from 'protractor';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})


export class PeopleService {

  constructor(private http: HttpClient) {
  }

  fetchPeople(): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/api');

  }

  fetchPeopleById(id): Observable<any> {
    return this.http.get(`http://127.0.0.1:5000/api/${id}`);
  }

  addPeople(person): Observable<any> {
    console.log('http://127.0.0.1:5000/api', person, httpOptions);
    return this.http.post(
      'http://127.0.0.1:5000/api',
      person,
      httpOptions
    );
  }

  deletePeople(id: string): Observable<any> {
    return this.http.delete(`http://127.0.0.1:5000/api/${id}`);
  }



  editPeople(person): Observable<any> {
    // console.log(`http://127.0.0.1:5000/api/${person._id}`,
    //   person,
    //   httpOptions);
    return this.http.put(
      `http://127.0.0.1:5000/api/${person._id}`,
      person,
      httpOptions
    );
  }
}

