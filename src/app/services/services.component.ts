import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'isd-services',
  standalone: true,
  imports: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
