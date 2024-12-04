import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginRequest } from "../interfaces/login-request.interface";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly apiUrl = `${environment.apiUrl}/auth`;

     // BehaviorSubject pour suivre l'état de connexion
     private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
     isLoggedIn$ = this.isLoggedInSubject.asObservable();
 
     constructor(private readonly http: HttpClient, private readonly router: Router) {}
 
     login(loginRequest: LoginRequest): Observable<string> {
        return this.http.post(`${this.apiUrl}/signin`, loginRequest, { responseType: 'text' }).pipe(
            tap(token => {
                this.setToken(token); // Stocker le token
                this.isLoggedInSubject.next(true); // Mettre à jour l'état de connexion
                this.router.navigate(['/']);
            })
        );
    }
 
     logout(): void {
         this.removeToken();
         this.isLoggedInSubject.next(false); // Mettre à jour l'état de connexion
     }
 
     private setToken(token: string): void {
         localStorage.setItem('authToken', token);
     }
 
     private removeToken(): void {
         localStorage.removeItem('authToken');
     }
 
     private hasToken(): boolean {
         return !!localStorage.getItem('authToken');
     }
 
     getToken(): string | null {
         return localStorage.getItem('authToken');
     }
}