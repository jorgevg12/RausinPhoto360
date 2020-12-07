import { Component, ViewChild, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'isi-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    
    altura;
    scrolledY = window.scrollY;
    constructor(private viewportScroller: ViewportScroller){}

  
    public onClick(elementId: string): void{
        var element = document.getElementById(elementId)
        if(element){
            if (elementId != 'home') element.scrollIntoView({behavior:'smooth'});
            else { 
                window.scrollTo({
                top: 0,
                behavior: 'smooth',
                });
            }
        }
    }

}
