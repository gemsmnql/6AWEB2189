import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Register } from './register/register';
import { EsportsRegister } from './esports-register/esports-register';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Register, EsportsRegister],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_mat');
}
