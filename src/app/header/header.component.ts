import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  slogan: string = 'Your one stop shop for everything.';
  //create method
  // getSlogan(){
  //   return "This is method pass to the String interpolation."
  // }
  source: string =
    'https://img.freepik.com/free-vector/pop-art-girl-holding-shopping-bags_88138-217.jpg?w=2000';
}
