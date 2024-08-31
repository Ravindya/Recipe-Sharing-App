import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5454';
  constructor(private http:HttpClient) { }

  authSubject = new BehaviorSubject<any>({
    user:null
  });

  login(userData:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/signin`,userData)
  }

  register(userData:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/signup`,userData)
  }

  getUserProfile():Observable<any>{
    const headers = new HttpHeaders({
      Authorization:`Bearer ${localStorage.getItem("jwt")}`
    })
    return this.http.get<any>(`${this.baseUrl}/api/users/profile`,{headers}).pipe(
      tap((user)=>{
        const currentState = this.authSubject.value;
        this.authSubject.next({...currentState,user})
      })
    )
  }

  logout(){
    localStorage.clear();
    this.authSubject.next({})
  }

  // getPrincipalEmail(){
  //   return user?.email ??
  //     this.user?.providerData.at(0)?.email;
  // }
}
