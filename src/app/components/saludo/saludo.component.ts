import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  standalone: false,
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.scss',
})
export class SaludoComponent {
  nombre: string = 'Angular';
}
