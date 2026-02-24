import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './custom-form.html',
  styleUrl: './custom-form.css',
})
export class CustomForm {
  customForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.customForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      contact: ['', [Validators.required, Validators.pattern(/^09\d{9}$/)]],
      date: ['', Validators.required],
      hours: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
      comments: ['']
    });
  }

  isInvalid(control: string) {
    const ctrl = this.customForm.get(control);
    return ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched);
  }

  onSubmit() {
    if (this.customForm.valid) {
    const reservationData = this.customForm.value;

    console.log('%c --- HAU LIBRARY RESERVATION --- ', 'background: #800000; color: #FFD700; font-weight: bold; padding: 4px;');

    console.table(reservationData);

    console.log('Student:', reservationData.name);
    console.log('Contact:', reservationData.contact);
    console.log('Date:', reservationData.date);
    console.log('Duration:', reservationData.hours + ' Hours');

    alert('Reservation successful! Details printed to console.');
  } else {
    this.customForm.markAllAsTouched();
    console.warn('Form is invalid. Please check the required fields.');
  }
  }
}
