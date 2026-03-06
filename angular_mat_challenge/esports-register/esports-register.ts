import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, Renderer2, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

// Material Imports
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-esports-register',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  templateUrl: './esports-register.html',
  styleUrl: './esports-register.css',
})
export class EsportsRegister implements OnInit {
  private renderer = inject(Renderer2);
  private _snackBar = inject(MatSnackBar);

  isDarkMode = true; // Default to Dark Mode
  isLoading = false;
  submitted = false;
  showResults = false;
  hiddenBadge = false;

  formdata: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(8),
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]*$/) 
    ]),
    role: new FormControl('', [Validators.required]), 
    birthDate: new FormControl(null, [Validators.required, this.ageValidator.bind(this)]),
    rank: new FormControl(5) 
  });

  ngOnInit() {
    // Apply dark theme class to body on load
    this.renderer.addClass(document.body, 'dark-theme');
  }

  ageValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      const birthYear = new Date(control.value).getFullYear();
      if (birthYear > 2006) {
        return { tooYoung: true };
      }
    }
    return null;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }

  onClickSubmit(data: any) {
    if (this.formdata.valid) {
      this.isLoading = true;
      this.submitted = true;
      this._snackBar.open("Authenticating Player Profile...", "Please Wait", { duration: 2000 });

      setTimeout(() => {
        this.isLoading = false;
        this.submitted = true;
        this.showResults = true;
        this._snackBar.open("Entry Confirmed! GLHF", "OK", { duration: 3000 });
      }, 3000); 
    } else {
      this.formdata.markAllAsTouched();
      this._snackBar.open("Form incomplete!", "OK");
    }
  }
}