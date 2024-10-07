import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
