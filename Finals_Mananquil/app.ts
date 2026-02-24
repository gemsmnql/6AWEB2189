import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveDemo } from './reactive-demo/reactive-demo';
import { TemplateDemo } from './template-demo/template-demo';
import { CustomForm } from './custom-form/custom-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TemplateDemo, ReactiveDemo, CustomForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedDemo = 'template';
}
