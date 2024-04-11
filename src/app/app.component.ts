import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SingleInputComponent } from './single-input/single-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SingleInputComponent, LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
