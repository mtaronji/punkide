import { Component } from '@angular/core';
import { PunkLibModule } from 'punk-lib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[PunkLibModule],
  standalone:true
})
export class AppComponent {
  title = 'testapp';
  
}
