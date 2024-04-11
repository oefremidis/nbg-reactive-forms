import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-input',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './single-input.component.html',
  styleUrl: './single-input.component.css'
})
export class SingleInputComponent {
  
  // single input box
  email = new FormControl('');

}
