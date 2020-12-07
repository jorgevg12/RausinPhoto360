import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isi-header360',
  templateUrl: './header360.component.html',
  styleUrls: ['./header360.component.scss']
})
export class Header360Component implements OnInit {

  constructor() { }

    ngOnInit(){}

    public onClick(elementId: string): void{
      var element = document.getElementById(elementId)
      console.log("element", element)
      if (element) element.scrollIntoView({behavior:'smooth'});

  }

}
