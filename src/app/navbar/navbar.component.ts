import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logo: string='Netflix';
  navbarLinks: string[]=['Home',' tv shows','About','Contact Us'];
  language:string='en-Us'
  constructor(){}
  changeLanguage(){
     this.language='ar-SA'
  }
}
