import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname: string = 'Steve';
  lastname: string = 'Kindstrand';
  age: number = 31;
  isMarried: boolean = true;
}
