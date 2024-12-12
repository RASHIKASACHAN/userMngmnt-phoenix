import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private jsonFileUrl = 'assets/users.json'; // Path to the JSON file

  constructor(private http: HttpClient) {}

  // Load JSON data
  getUsers(): Observable<any> {
    return this.http.get(this.jsonFileUrl);
  }

  // Simulate user update (can be extended for local logic)
  updateUser(userId: string, firstName: string, lastName: string): Observable<any> {
    console.log(`Updated User - ID: ${userId}, FirstName: ${firstName}, LastName: ${lastName}`);
    return new Observable((observer) => {
      observer.next({ success: true });
      observer.complete();
    });
  }
}
