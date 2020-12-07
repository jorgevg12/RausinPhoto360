import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent, from } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
declare var AOS;
@Component({
  selector: 'isi-root',
  template: `
  <div #container>  
    <router-outlet></router-outlet>
    
  </div>
  `,
  styles: []
})
export class AppComponent implements AfterViewInit {
  @ViewChild('container') container;
  title = 'isidro-web';
  inRoute = false;

  constructor(private router: Router) {
  }
  ngAfterViewInit() {
    

  
}
}