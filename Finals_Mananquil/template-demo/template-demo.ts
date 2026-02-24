import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  imports: [FormsModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css',
})
export class TemplateDemo {
  title = 'Template Driven Demo';
  username = '';
  email = '';
  password = '';
  role = '';
  gender = '';
  status = '';
  comments = '';
  submitted = false;

onSubmit() {
  // This will print the details to the browser console
    console.log('--- Submitted Details ---');
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Role:', this.role);
    console.log('Gender:', this.gender);
    console.log('Status:', this.status);
    console.log('Comments:', this.comments);

    // Alert the user
    alert('Submission Successful! Check the console for details.');
  }
}
