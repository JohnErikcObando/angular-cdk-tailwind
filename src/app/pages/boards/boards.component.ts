import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkAccordionModule } from '@angular/cdk/accordion';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faBox,
  faWaveSquare,
  faClock,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [
    NavbarComponent,
    OverlayModule,
    FontAwesomeModule,
    CdkAccordionModule,
  ],
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;
}
