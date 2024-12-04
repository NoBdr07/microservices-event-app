import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../interfaces/login-request.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService,
    private readonly fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
        const loginRequest = this.loginForm.value as LoginRequest;

        this.authService.login(loginRequest).subscribe({
            next: () => {
                console.log("Login réussi");
            },
            error: (err) => {
                console.error("Erreur lors du login :", err);
                this.errorMessage = "Erreur de connexion. Vérifiez vos identifiants.";
            }
        });
    } else {
        this.errorMessage = 'Formulaire invalide';
    }
}
}
