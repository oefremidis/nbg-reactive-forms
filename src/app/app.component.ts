import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { StingleInputComponent } from './single-input/single-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StingleInputComponent, LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
