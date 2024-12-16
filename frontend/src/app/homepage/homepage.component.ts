import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

// Importations pour Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, RouterLink, FontAwesomeModule],  // Ajoute FontAwesomeModule ici
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

}
