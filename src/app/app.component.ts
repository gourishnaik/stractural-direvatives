import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stractural-direvatives';
  show:boolean=false;
  Fruits = ['Banana','Apple','Pineapple'];
  status = 'error'
  
}
