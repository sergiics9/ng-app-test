import { Component } from '@angular/core';
import { MenuOption } from '../../interfaces/menu.option';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  options: MenuOption[] = [
    { label: 'home', path: '/' },
    { label: 'saludo', path: '/saludo' },
    { label: 'about', path: '/about' },
  ];
}
